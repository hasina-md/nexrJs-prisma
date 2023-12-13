 import { PrismaClient } from "@prisma/client";

 export async function getData () {
  const db = new PrismaClient();
  const data = await db.course.findMany({});
  return {
   courses: data
  }
 }

// this is the presentation layer
export  default async function Home () {
  const courseList =await getData();
  return (    
    <main className="">
      <h2> Welcome to Next-JS with prisma included </h2>
      <pre>{JSON.stringify(courseList, null, 2)}</pre>
    </main>
  )
}
