import React from 'react'
        import {
        Card,
        CardContent,
        CardDescription,
        CardFooter,
        CardHeader,
        CardTitle,
        } from "@/components/ui/card"
        import project from "../../assets/project.png"

export const Projectcard = () => {
  return (
    <Card>
                    <CardHeader>
                        <CardTitle>CaseCraft</CardTitle>
                        <CardDescription>Our product is made using the latest technology to ensure the best user experience.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <img src={project}/>
                    </CardContent>
                    <CardFooter>
                        <p>url <a href="https://case-craft-zhvb.vercel.app/" className='text-xl text-green-500'> CaseCraft</a></p>

                    </CardFooter>
                    </Card>
  )
}
