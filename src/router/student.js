const express = require("express");
const router = new express.Router();
const Student = require("../models/students");

router.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/students", async (req, res) => {
  try {
    const studentData = await Student.find();
    res.send(studentData);
  } catch (e) {
    res.send(e);
  }
});

router.get("/student/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const studentData = await Student.findById(_id);
    if (!studentData) {
      res.status(400).send();
    } else {
      res.send(studentData);
    }
  } catch (e) {
    res.send(e);
  }
});

router.patch("/student/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updatedStudentData = await Student.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updatedStudentData);
  } catch (e) {
    res.status(404).send(e);
  }
});

router.delete("/student/:id", async (req, res) => {
  try {
    const deleteStudentData = await Student.findByIdAndDelete(req.params.id);
    if (deleteStudentData) {
      res.send("in");
      res.status(400).send();
    } else {
      res.send(deleteStudentData);
    }
  } catch (e) {
    res.status(404).send(e);
  }
});

module.exports = router;
