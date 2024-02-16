import logo from '@/images/Anti-vjti.png'
import post1 from '@/images/post1.jpeg'
import post2 from '@/images/post2.jpeg'
import post3 from '@/images/post3.png'
import { homePageDataType } from '@/types/types'
export let data:homePageDataType[]=[
    {
        img:logo,
        p1:'As the name says, it is a platform for the people who are against being normal who like to live on the edge',
        p2:'It was build upon the concept of anonymity and security',
        p3:'Anyone with an valid VJTI email Id can register here'
    },
    {
        img:post1,
        p1:'The purpose of this platform is to provide a place for the students to share their thoughts, ideas, and opinions anonymously',
        p2:'To be honest the above statement is just bullshit, the real purpose is to have fun and talk about stuff that we cant talk in public',
        p3:'If you want to complain ,rant ,discuss ,share ,throw your opinions we got you covered'
    },
    {
        img:post2,
        p1:'This platform is not for the faint hearted, we talk about stuff that is not meant for the public eye',
        p2:'Buckle up and get ready to see the real side of VJTI, the side that is not shown to the public',
        p3:'We are not responsible for any of the content posted here, we are just a platform to post stuff'
    },
    {
        img:post3,
        p1:'As the question arises of anonymity, as you can see the email and password are stored in HASH format',
        p2:'The credentials you provide are not shared with anyone, not even the developers of this platform',
        p3:'Anything you post here is not linked to your email id, so you can post anything without any fear of being caught'
    }
]