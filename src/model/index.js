import firebase from '../db/config'

const db = firebase.database()

export const findSection = (queryString) => {
  if(Object.keys(queryString).length === 0) {
    return findAllSection()
      .then(courses => Promise.resolve(courses))
      .catch(err => Promise.reject(err))
  }else {
    const { courseId } = queryString
    return findSectionByCourseId(courseId)
      .then(sections => Promise.resolve(sections))
      .catch(err => Promise.reject(err))
  }
}

export const findAllCourse = () => {
  return db.ref('course').once('value')
    .then((res) => Promise.resolve(res.val()))
    .catch(err => Promise.reject(err))
}

export const findAllSection = () => {
  return db.ref('section').once('value')
    .then(response => Promise.resolve(response.val()))
    .catch(err => Promise.reject('error'))
}

export const findCourseByCourseId = (courseId) => {
  return findAllCourse()
  .then((courses) => {
    const course = courses.filter(course => course.course_id == courseId)
    return Promise.resolve(course)
  })
  .catch(err => Promose.reject(err))
}

export const findSectionByCourseId = (courseId) => {
  return findAllSection()
    .then(allSections => {
      const sections = allSections.filter(course => course.course_id == courseId)
      return Promise.resolve(sections)
    })
    .catch(err => Promise.reject(err))
}

export const findSectionBySectionId = (sectionId) => {
  return findAllSection()
    .then(allSections => {
      const sections = allSections.filter(section => section.section_id === sectionId)
      return Promise.reject(sections)
    })
    .catch(err => Promise.reject(err))
}
