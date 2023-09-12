const User = require('../models/userModel')

/**
 * CREATE USER 
 */
exports.createUser = async (req, res, next) => {
    try {
        const newUser = await User.create(req.body);
        return res.status(200).json({
            message: 'user created successfully',
            newUser: newUser
        })

    } catch (error) {
        return res.status(400).json({
            status: ' error occured',
            message: error.message
        })


    }


}

/**
 * FIND ALL USER 
 */
exports.readUser = async (req, res, next) => {

    try {
        const readUser = await User.find()
        res.status(200).json({
            status: 'success',
            userData: readUser
        })

    } catch (error) {
        return res.status(404).json({
            status: ' error occured',
            message: error.message
        })

    }


}




/**
 * FIND ALL USER BY NAME
 */


exports.readUserByName = async (req, res, next) => {

    try {

        const readUser = await User.findOne({ name: req.params.id })
        if (readUser) {
            return res.status(200).json({
                status: 'success',
                userData: readUser
            })
        }
        return res.status(404).json({
            status: 'Failed',
            message: 'User does  not exits in Database'
        })
        next()

    } catch (error) {
        return res.status(404).json({
            status: ' error occured',
            message: error.message
        })

    }


}

exports.updateUser = async (req, res, next) => {


    try {

        const update = req.body;
        const readUser = await User.findOneAndUpdate({ name: req.params.id },
            {
                name: req.body.name,
                age: req.body.age
            },
            { new: true })
        return res.status(200).json({
            status: 'updated successfully',
            userData: readUser
        })

    } catch (error) {
        return res.status(404).json({
            status: ' error occured',
            message: error.message
        })

    }


}


exports.deleteUser = async (req, res, next) => {
    try {
        const name = req.params.id;

        const userExits = await User.findOne({ name: req.params.id })
        if (userExits) {

            const readUser = await User.findOneAndDelete({ name: req.params.id })
            return res.status(200).json({
                status: 'deleted successfully',
                message: `user ${name} is deleted successfully`
                // 'delete user successfully'
            })
        }
        return res.json({
            message: "User does not exit "
        })

    } catch (error) {
        return res.status(404).json({
            status: ' error occured',
            message: error.message
        })

    }

}