const express = require('express')
const { findAllCourse, findSection, findCourseByCourseId, findSectionBySectionId, findExamByCourseId } = require('./model')
const Router = express.Router()

Router.get('/course', async (req, res, next) => {
  const course = await findAllCourse()
  res.send(course)
})

Router.get('/section', async (req, res, next) => {
  try {
    const course = await findSection(req.query)
    res.send(course)
  }catch(err) {
    res.status(500).send(err)
  }
})

Router.get('/course/:courseId', async (req, res, next) => {
  try {
    const courseId = req.params.courseId
    const course = await findCourseByCourseId(courseId)
    res.send(course)
  }catch(err) {
    res.status(500).send(err)
  }
})
Router.get('/section/:sectionId', async (req, res, nect) => {
  try {
    const section = await findSectionBySectionId(req.params.sectionId)
    res.send(section)
  }catch(err) {
    res.status(500).send(err)
  }
})

Router.get('/exam', async (req, res, next) => {
  try{
    const courseId = req.query.courseId
    const exam = await findExamByCourseId(courseId)
    res.send(exam)
  }catch(err) {
    res.status(500).send(err)
  }
})
module.exports = Router
