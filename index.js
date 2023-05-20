const express = require("express");

const path = require("path");

const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

const app = express();


const dbPath = path.join(__dirname, "technologies.db");

let db = null;

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("Server Running at http://localhost:3000/");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};

initializeDBAndServer();

app.get('/html',async(request,response)=>{
  const htmlQuery=`SELECT * FROM HTML`
  const responseQuery = await db.all(htmlQuery)
  response.send(responseQuery)
})

app.get('/javascript',async(request,response)=>{
  const htmlQuery=`SELECT * FROM Javascript`
  const responseQuery = await db.all(htmlQuery)
  response.send(responseQuery)
})

const listOfReplies = (h,query) => {
  let empty = [];
  query.forEach((element) => {
    empty.push(element);
  });
  return [{...h,techniques: empty }];
};


app.get('/nodejs',async(request,response)=>{
  let responseList=[]
  for (let i = 1;i<=2;i++){
    const projectsQuery=`SELECT * FROM NodeJS WHERE project_id = ${i}`
    const techniquesQuery = `SELECT * FROM Techniques WHERE project_id = ${i}`
    const projectsQueryResponse =await db.all(projectsQuery)
    const techniquesQueryResponse = await db.all(techniquesQuery)
    const responseItem = listOfReplies(...projectsQueryResponse,techniquesQueryResponse)
    responseList.push(...responseItem)
  } 
  response.send(responseList)
})

const listOfTags=(projectDetails,tags)=>{
  let tagsList=[];
  tags.forEach(element=>{
    tagsList.push(element)
  });
  return {...projectDetails,tagsList:tagsList};
}

app.get('/reactjs/class-components',async(request,response)=>{
  // Identify Project_id w.r.t category
  const projectIdQuery = `SELECT project_id FROM ReactJS WHERE category='Class Components';`
  const projectIdResponse = await db.all(projectIdQuery)
  const projectIdList=[]
  projectIdResponse.forEach(query=>{
    projectIdList.push(...Object.values(query))
  })

  let responseList=[]
  for(const id of projectIdList){
    const projectsQuery = `SELECT * FROM ReactJS WHERE project_id=${id};` 
    const tagsQuery=`SELECT * FROM TagsList WHERE project_id=${id};`
    const projectsQueryResponse = await db.all(projectsQuery);
    const tagsQueryResponse = await db.all(tagsQuery);
    const responseItem = listOfTags(...projectsQueryResponse,tagsQueryResponse)
    responseList.push(responseItem)
  }
  response.send(responseList)
})

app.get('/reactjs/life-cycle',async(request,response)=>{
  // Identify Project_id w.r.t category
  const projectIdQuery = `SELECT project_id FROM ReactJS WHERE category='Component Life Cycle';`
  const projectIdResponse = await db.all(projectIdQuery)
  const projectIdList=[]
  projectIdResponse.forEach(query=>{
    projectIdList.push(...Object.values(query))
  })

  let responseList=[]
  for(const id of projectIdList){
    const projectsQuery = `SELECT * FROM ReactJS WHERE project_id=${id};` 
    const tagsQuery=`SELECT * FROM TagsList WHERE project_id=${id};`
    const projectsQueryResponse = await db.all(projectsQuery);
    const tagsQueryResponse = await db.all(tagsQuery);
    const responseItem = listOfTags(...projectsQueryResponse,tagsQueryResponse)
    responseList.push(responseItem)
  }
  response.send(responseList)
})

app.get('/reactjs/react-routing',async(request,response)=>{
  // Identify Project_id w.r.t category
  const projectIdQuery = `SELECT project_id FROM ReactJS WHERE category='React Routing';`
  const projectIdResponse = await db.all(projectIdQuery)
  const projectIdList=[]
  projectIdResponse.forEach(query=>{
    projectIdList.push(...Object.values(query))
  })

  let responseList=[]
  for(const id of projectIdList){
    const projectsQuery = `SELECT * FROM ReactJS WHERE project_id=${id};` 
    const tagsQuery=`SELECT * FROM TagsList WHERE project_id=${id};`
    const projectsQueryResponse = await db.all(projectsQuery);
    const tagsQueryResponse = await db.all(tagsQuery);
    const responseItem = listOfTags(...projectsQueryResponse,tagsQueryResponse)
    responseList.push(responseItem)
  }
  response.send(responseList)
})

app.get('/reactjs/working-with-lists',async(request,response)=>{
  // Identify Project_id w.r.t category
  const projectIdQuery = `SELECT project_id FROM ReactJS WHERE category='Working with Lists';`
  const projectIdResponse = await db.all(projectIdQuery)
  const projectIdList=[]
  projectIdResponse.forEach(query=>{
    projectIdList.push(...Object.values(query))
  })

  let responseList=[]
  for(const id of projectIdList){
    const projectsQuery = `SELECT * FROM ReactJS WHERE project_id=${id};` 
    const tagsQuery=`SELECT * FROM TagsList WHERE project_id=${id};`
    const projectsQueryResponse = await db.all(projectsQuery);
    const tagsQueryResponse = await db.all(tagsQuery);
    const responseItem = listOfTags(...projectsQueryResponse,tagsQueryResponse)
    responseList.push(responseItem)
  }
  response.send(responseList)
})