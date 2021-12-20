use vino
use integra

db.createCollection("student")
db.student.drop()
db.student.insertMany( [{
    name:"raja",age:21},
    {name:"siva",age:23},
    {name:"mani",age:54},
    {name:"jothi",age:60},
    {name:"chitra",age:23},
    {name:"abi",age:53},
    {name:"dinesh",age:45},
    {name:"aswin",age:43},
    {name:"praveen",age:15},
    {name:"thara",age:34},
    {name:"dharini",age:76}])
   
   db.student.aggregate([
    {
        $group:{_id:"$age",noofrecords:{"$sum":1}}
}
])
db.student.aggregate( [
    {
        $group:{_id:"$age",total:{"$sum":"$presentdays"}}
    },
    {
        $match:{total:{$gt:23}}
    },
    {
      $project:{_id:1,total:1} 
    },
    {
        $sort:{total:1}
    },
    {
        $skip:1
    },
    {
        $limit:1
    }
    ])