

// const bcrypt = require('bcryptjs');
require('dotenv').config();
const { generateToken, generateResetToken } = require('../utils/token');
const { logActivity } = require('../utils/logActivity');
const { hashPassword, verifyPassword } = require('../utils/hashUtil');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
const transporter = require('../config/email');
const { token } = require('morgan');
const { generateRandomPassword } = require("../utils/randomPassword")
const { sendBulkEmailToUsers, sendResetPasswordEmail, } = require('../utils/emailSender');
const dotenv = require('dotenv');
const decryptPassword = require('../utils/decryptPassword');
dotenv.config();





// Function to create a new user/register
const registerUser = async (req, res) => {
    const { name, dob, email, password, role, pan, gender, phone } =
        req.body;
    if (
        !name ||
        !dob ||
        !email ||
        !password ||
        !role ||
        !pan ||
        !gender ||
        !phone
    ) {
        console.log('All fields are required!');
        return res.status(400).json({ error: 'All fields are required' });
    }
    try {

        const existingUser = await userModel.findUserByEmail(email);
        if (existingUser) {
            return res.status(409).json({ error: 'User already exists' });
        }
        const password = generateRandomPassword(8, true)
        // Ensure password is a string
        const passwordHash = await hashPassword(password.toString());

        const newUser = await userModel.createUser(
            name,
            dob,
            email,
            password,
            role,
            pan,
            gender,
            phone
        );
        //
        if (newUser) {
            await logActivity({
                user_id: newUser.user_id,
                activity: 'Register user',
                status: 'success',
                details: 'User registered successfully',
            });
            await sendBulkEmailToUsers(email, password);
            return res.status(201).json(newUser);
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// Function for logging in
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }
    try {
        const result = await userModel.findUserByEmail(email);
        if (!result) {
            await logActivity({
                activity: 'Login attempt',
                status: 'failure',
                details: 'User not found',
            });
            return res.status(404).json({ error: 'User not found' });
        }
        const decryptedPassword = await decryptPassword(password)
        const isPasswordMatch = await verifyPassword(
            decryptedPassword,
            result.password_hash
        );
        if (!isPasswordMatch) {
            await logActivity({
                user_id: result.user_id,
                activity: 'Login attempt',
                status: 'failure',
                details: 'Invalid password',
            });
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        // JWT token signing
        const userData = {
            id: result.user_id,
            email: result.email,
            name: result.name,
            role: result.role,
        };

        const token = await generateToken(userData);
        const resettoken = await generateResetToken(userData);

        await logActivity({
            user_id: userData.id,
            activity: 'Login attempt',
            status: 'success',
            details: 'User logged in successfully',
        });
        res.cookie('jwttoken', token, {
            expires: new Date(Date.now() + 86400000),
            httpOnly: true,
            sameSite: 'None',
            secure: true,
        });

        if (result.status === 'NOTACTIVE') {
            res.set('Access-Control-Expose-Headers', 'resettoken');
            res.set('resettoken', resettoken);
        }

        return res.status(200).json({
            message: 'Login Successful',
            result: {
                id: result.user_id,
                dob: result.user_dob,
                name: result.name,
                email: result.email,
                role: result.role,
                created_at: result.created_at,
                status: result.status,
                pan: result.pan,
                gender: result.gender,
                phone: result.phone,
            },
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports = {
    registerUser,
    loginUser,
    updateUser,
    deleteUser,
    getAllPaginatedUsers,
    verifyResetToken,
    resetPassword,
    logout,
    sendResetEmail,
    sendResetPasswordEmail,
};