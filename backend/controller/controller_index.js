const { student } = require("../module/module_index");

// add student marks

module.exports.add_mark = async (req, res) => {
 try {
  var sub1 = parseInt(req.body.sub1);
  var sub2 = parseInt(req.body.sub2);
  var sub3 = parseInt(req.body.sub3);
  var sub4 = parseInt(req.body.sub4);
  var sub5 = parseInt(req.body.sub5);
  var total = sub1 + sub2 + sub3 + sub4 + sub5;
  var per = total / 5;

  if(sub1 < 35 && sub2 < 35 && sub3 < 35 && sub4 < 35 && sub5 < 35){
   var result = "Fail"
  }else if(sub1 < 35 && sub2 < 35 && sub3 < 35 || sub1 < 35 && sub2 < 35 && sub4 < 35 || sub1 < 35 && sub2 < 35 && sub5 < 35 || sub1 < 35 && sub3< 35 && sub4 < 35  || sub1 < 35 && sub3< 35 && sub5 < 35 || sub1 < 35 && sub4< 35 && sub5 < 35 || sub2 < 35 && sub3 < 35 && sub4 < 35 || sub2 < 35 && sub3< 35 && sub5 < 35 || sub2 < 35 && sub4 < 35 && sub5 < 35 || sub3 < 35 && sub4 < 35 && sub5 < 35){
   var result = "Fail"
  }else if(sub1 < 35 && sub2 < 35 && sub3 < 35 && sub4 < 35 || sub1 < 35 && sub2 < 35 && sub5 < 35  && sub3< 35|| sub1 < 35 && sub3< 35 && sub4 < 35 && sub5 < 35 || sub1 < 35 && sub2< 35 && sub4 < 35 && sub5 < 35 || sub2 < 35 && sub3< 35 && sub4 < 35 && sub5 < 35 ){
   var result = "Fail"
  }else if( sub1 < 35 && sub2 < 35 || sub1 < 35 && sub3 < 35 || sub1 < 35 && sub4 < 35 || sub1 < 35 && sub5 < 35 || sub2 < 35 && sub3 < 35 || sub2 < 35 && sub4 < 35 || sub2 < 35 && sub5 < 35 || sub4 < 35 && sub3 < 35 || sub5 < 35 && sub3 < 35 || sub4 < 35 && sub5 < 35){
   var result = "ATKT"
  }else if( sub1 < 35 || sub2 < 35 || sub3 < 35 || sub4 < 35 || sub5 <35){
   var result = "ATKT"
  }else{
   var result = "Pass"
  }

  await student.create(req.body);
  var data = await student.find({ "name": req.body.name });
  var id = data[0]._id;
  await student.findByIdAndUpdate({ "_id": id }, { "total": total, "per": per, "result":result });
  await student.findByIdAndUpdate({ "_id": id });
  var mark = await student.findByIdAndUpdate({ "_id": id });

  res.status(200).json({
   status: "success",
   mark
  })
 } catch (error) {
  res.status(200).json({
   error
  })
 }
}

// view all student

module.exports.view_mark = async (req, res) => {
 try {
  var all_student = await student.find();

  res.status(200).json({
   status: "success",
   all_student
  })
 } catch (error) {
  res.status(200).json({
   error
  })
 }
}

// single student

module.exports.single_student = async (req, res) => {
 try {
  var single = await student.find({ "_id": req.params.id });

  res.status(200).json({
   status: "success",
   single
  })
 } catch (error) {
  res.status(200).json({
   error
  })
 }
}

// update student mark

module.exports.update_student = async (req, res) => {
 try {

  var sub1 = parseInt(req.body.sub1);
  var sub2 = parseInt(req.body.sub2);
  var sub3 = parseInt(req.body.sub3);
  var sub4 = parseInt(req.body.sub4);
  var sub5 = parseInt(req.body.sub5);
  var total = sub1 + sub2 + sub3 + sub4 + sub5;
  var per = total / 5;

  if(sub1 < 35 && sub2 < 35 && sub3 < 35 && sub4 < 35 && sub5 < 35){
   var result = "Fail"
  }else if(sub1 < 35 && sub2 < 35 && sub3 < 35 || sub1 < 35 && sub2 < 35 && sub4 < 35 || sub1 < 35 && sub2 < 35 && sub5 < 35 || sub1 < 35 && sub3< 35 && sub4 < 35  || sub1 < 35 && sub3< 35 && sub5 < 35 || sub1 < 35 && sub4< 35 && sub5 < 35 || sub2 < 35 && sub3 < 35 && sub4 < 35 || sub2 < 35 && sub3< 35 && sub5 < 35 || sub2 < 35 && sub4 < 35 && sub5 < 35 || sub3 < 35 && sub4 < 35 && sub5 < 35){
   var result = "Fail"
  }else if(sub1 < 35 && sub2 < 35 && sub3 < 35 && sub4 < 35 || sub1 < 35 && sub2 < 35 && sub5 < 35  && sub3< 35|| sub1 < 35 && sub3< 35 && sub4 < 35 && sub5 < 35 || sub1 < 35 && sub2< 35 && sub4 < 35 && sub5 < 35 || sub2 < 35 && sub3< 35 && sub4 < 35 && sub5 < 35 ){
   var result = "Fail"
  }else if( sub1 < 35 && sub2 < 35 || sub1 < 35 && sub3 < 35 || sub1 < 35 && sub4 < 35 || sub1 < 35 && sub5 < 35 || sub2 < 35 && sub3 < 35 || sub2 < 35 && sub4 < 35 || sub2 < 35 && sub5 < 35 || sub4 < 35 && sub3 < 35 || sub5 < 35 && sub3 < 35 || sub4 < 35 && sub5 < 35){
   var result = "ATKT"
  }else if( sub1 < 35 || sub2 < 35 || sub3 < 35 || sub4 < 35 || sub5 <35){
   var result = "ATKT"
  }else{
   var result = "Pass"
  }

  await student.findByIdAndUpdate({ "_id": req.params.id }, {"total":total, "per":per, "sub1":sub1,"sub2":sub2, "sub3":sub3, "sub4":sub4, "sub5":sub5, "result": result});
  var update = await student.findByIdAndUpdate({ "_id": req.params.id });

  res.status(200).json({
   status: "success",
   update
  })
 } catch (error) {
  res.status(200).json({
   error
  })
 }
}

// delete student mark

module.exports.delete_student = async (req, res) => {
 try {
  var delete_mark = await student.findByIdAndDelete({ "_id": req.params.id });

  res.status(200).json({
   status: "success",
   delete_mark
  })
 } catch (error) {
  res.status(200).json({
   error
  })
 }
}

// minimum mark student

module.exports.min_student = async (req, res) => {
 try {
  var minimum = await student.find().sort("total").limit(1);

  res.status(200).json({
   status: "success",
   minimum
  })
 } catch (error) {
  res.status(200).json({
   error
  })
 }
}

// maximum mark student

module.exports.max_student = async (req, res) => {
 try {
  var maximum = await student.find().sort("-total").limit(1);

  res.status(200).json({
   status: "success",
   maximum
  })
 } catch (error) {
  res.status(200).json({
   error
  })
 }
}

// pass student 

module.exports.pass_student = async (req, res) => {
 try {
  var pass = await student.find({"result":"Pass"}).sort("-total");

  res.status(200).json({
   status: "success",
   pass
  })
 } catch (error) {
  res.status(200).json({
   error
  })
 }
}

// fail student 

module.exports.fail_student = async (req, res) => {
 try {
  var fail = await student.find({"result":"Fail"}).sort("-total");

  res.status(200).json({
   status: "success",
   fail
  })
 } catch (error) {
  res.status(200).json({
   error
  })
 }
}
// atkt student 

module.exports.atkt_student = async (req, res) => {
 try {
  var atkt = await student.find({"result":"ATKT"}).sort("-total");

  res.status(200).json({
   status: "success",
   atkt
  })
 } catch (error) {
  res.status(200).json({
   error
  })
 }
}

// search student by name

module.exports.search_student = async(req,res) =>{
try {
   var data = await student.find({
    "$or":[
       {
          name :{ $regex: req.params.key, $options:'i' }
       }
    ]
  })
  
  res.status(200).json({
   data
  })
} catch (error) {
 res.status(200).json({
  error
 })
}
}