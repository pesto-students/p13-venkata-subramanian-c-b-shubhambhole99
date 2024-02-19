const user = require('../models/task')


exports.getTask=async (req, res) => {
try{

    console.log("hello")
    return res.json("bye bye")

}catch(error){
    res.error("hello")

}
}

// exports.registertask = async (req, res) => {
//     try {
//         // validating the proper body
//         const {
//             firstName, lastName, email, phone, isDisabled, password
//         } = req.body

//         const finduser = await user.findOne({ email: email })
//         if (finduser) {
//             res.status(400).json({
//                 success: false,
//                 message: "user already exist ! with same email id"
//             })
//             return
//         }
//         const createUser = await user.create({
//             firstName, lastName, email, phone, isDisabled, password
//         })

//         if (!createUser) {
//             res.status(400).json({
//                 success: false,
//                 message: 'cannot create user',
//             })
//         }

//         if (createUser) {
//             // const token = createUser.getJwtToken()
//             // const salt = await bcrypt.genSalt(10);
//             // createUser.password = await bcrypt.hash(createUser.password, salt);

//             await createUser.save()
//             logger.info('User registered successfully');
//             return res.status(200).json({
//                 success: true,
//                 message: "user register succesfully",
//                 data: createUser,
//                 // token: token
//             })
//         }

//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "validation failled in catch",
//         });
//     }
// }

