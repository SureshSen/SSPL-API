const { v4: uuidv4 } = require('uuid');
const client = require('../database')
const sendMail = require('../utility/sendEmail');
//for ec2

//create conversation
const create = async (req, res) => {    
    try {
        client.query("INSERT INTO conversations(uuid,created_at,modified_at,conversation)VALUES($1,now(),now(),$2) RETURNING *", [uuidv4(), req.body], (error, result) => {
            if (!error) {
                res.status(201).json({ data: result.rows[0] });
                // if (sendMail())
                //     res.status(201).json({ data: result.rows[0] });
                // else {
                //     res.status(500).json({ message: "Something went wron on email sent" });
                // }
            }
            else {
                res.status(500).json({ message: error });
            }            
        });
    } catch (error) {
        console.log('catch error');
        res.status(500).json({ message: error });
    }
};
//update conversation :uuid
const update = async (req, res) => {    
    const { uuid } = req.params;    
    try {
         client.query("UPDATE conversations SET modified_at=now(),conversation=$1 WHERE uuid = $2 RETURNING *", [req.body, uuid], (error, result) => {
            if (!error) {
                res.status(201).json({ data: result.rows[0] });
                // if (sendMail())
                //     res.status(201).json({ data: result.rows });
                // else {
                //     res.status(500).json({ message: "Something went wron on email sent" });
                // }
            }
            else {
                res.status(500).json({ message: error });
            }
        });

    } catch (error) {
        res.status(500).json({ message: error });
    }

};

//for localdevelopment

// const create = async (req, res) => {
//     console.log('create method call');
//     try {
//         client.query("INSERT INTO botconversations(uuid,created_at,modified_at,conversation)VALUES($1,now(),now(),$2) RETURNING *", [uuidv4(), req.body], (error, result) => {
//             if (!error) {
//                 res.status(201).json({ data: result.rows[0] });
//                 // if (sendMail())
//                 //     res.status(201).json({ data: result.rows[0] });
//                 // else {
//                 //     res.status(500).json({ message: "Something went wron on email sent" });
//                 // }
//             }
//             else {
//                 res.status(500).json({ message: error });
//             }            
//         });
//     } catch (error) {
//         console.log('catch error');
//         res.status(500).json({ message: error });
//     }
// };
// const update = async (req, res) => {
//     console.log('update method call');
//     const { uuid } = req.params;    
//     try {
//          client.query("UPDATE botconversations SET modified_at=now(),conversation=$1 WHERE uuid = $2 RETURNING *", [req.body, uuid], (error, result) => {
//             if (!error) {
//                 res.status(201).json({ data: result.rows[0] });
//                 // if (sendMail())
//                 //     res.status(201).json({ data: result.rows });
//                 // else {
//                 //     res.status(500).json({ message: "Something went wron on email sent" });
//                 // }
//             }
//             else {
//                 res.status(500).json({ message: error });
//             }
//         });

//     } catch (error) {
//         res.status(500).json({ message: error });
//     }

// };
module.exports = { create, update }