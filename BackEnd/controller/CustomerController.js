const CustomerSchema = require('../model/Customer');

const saveCustomer = (req,resp)=>{
    const customer= new CustomerSchema({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    customer.save().then(result=>{
        resp.json({data:{status:201,customer,message:'Customer Saved'}});
        console.log(result)
    }).catch(error=>{
        console.log(error)
        resp.json(error)
    })
};

const getCustomer = (req,resp)=>{
    CustomerSchema.findOne({email: req.headers.email , password: req.headers.password} ).then(result=>{
            resp.json({data: {status: 201, value: result, message: 'Customer found'}});

    }).catch(error=>{
        console.log(error)
        resp.json(error)
    })
};
const getCustomerByID = (req,resp)=>{
    CustomerSchema.findOne({email: req.headers.email } ).then(result=>{
            resp.json({data: {status: 201, value: result, message: 'Customer found'}});

    }).catch(error=>{
        console.log(error)
        resp.json(error)
    })
};

const deleteCustomer = (req,resp)=>{
    CustomerSchema.findOneAndDelete({_id: req.headers.id}).then(result=>{
        resp.json({data:{status:201,value:result,message:'Customer exists'}});
        console.log(result)
    }).catch(error=>{
        console.log(error)
        resp.json(error)
    })
};

const listCustomer = (req,resp)=>{
    CustomerSchema.find().then(result=>{
        resp.json({data:{status:201,value:result}});
        console.log(result)
    }).catch(error=>{
        console.log(error)
        resp.json(error)
    })
};

module.exports = {
    saveCustomer,
    getCustomer,
    listCustomer,
    deleteCustomer,
    getCustomerByID
}