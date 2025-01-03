import { useEffect, useState } from 'react'
import { ParentWrapper } from './style'

export const FAQ = () => {
    const [question,setQuestion]=useState("")
    const [preQuestion,setPreQuestion ]= useState([
        {
            question: "What is the maximum number of participants on a trip? What if you don't reach your minimum?",
            reply: ["Most of our tours carry a maximum of 18 participants; some tours (ie hiking tours) top out at 16. In the event that we do not achieve our minimum complement by our 90-day deadline, we may offer group members the option of paying a small-group surcharge as an alternative to cancellation. If all group members agree, we will confirm the trip at existing numbers; this surcharge is refundable in the event that we ultimately achieve our regular minimum. If the small group surcharge is not accepted, we will offer a refund of your deposit or a different trip of your choice"]
        },
        {
            question: "What is the maximum number of participants on a trip? What if you don't reach your minimum?",
            reply: ["Most of our tours carry a maximum of 18 participants; some tours (ie hiking tours) top out at 16. In the event that we do not achieve our minimum complement by our 90-day deadline, we may offer group members the option of paying a small-group surcharge as an alternative to cancellation. If all group members agree, we will confirm the trip at existing numbers; this surcharge is refundable in the event that we ultimately achieve our regular minimum. If the small group surcharge is not accepted, we will offer a refund of your deposit or a different trip of your choice"]
        },

    ])
    const [reply,setReply]=useState("")

    const StoreQuestion=(e)=>{
       // console.log("value",question)
        e.preventDefault();
        const data=JSON.parse(localStorage.getItem("questions"));
        //console.log("data",data)
        localStorage.setItem("questions",JSON.stringify([...data,{question:question,reply:[]}]))
        setQuestion("");
        //console.log("data",data)
        setPreQuestion(JSON.parse(localStorage.getItem("questions")))
    }
    const sendReply=(e,questionNumber)=>{
        e.preventDefault();
        //console.log(questionNumber)
        preQuestion[questionNumber].reply.push(reply)
        setReply("")
        localStorage.clear();
       localStorage.setItem("questions",JSON.stringify(preQuestion));
    }
    useEffect(()=>{
        const data=localStorage.getItem("questions")
       // console.log("data",data)
        if(!JSON.parse(data))
        {
            localStorage.setItem("questions",JSON.stringify(preQuestion));
        }
        setPreQuestion(JSON.parse(data))

    },[])

    
   
    return (
        <ParentWrapper className=' mt-4'>

            <div className=' px-2 '>
                <div>
                    <span className="block text-2xl font-bold mt-10">Put Your Enquiry</span>
                    <form >
                        <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="username">
                            Ask a Question?
                        </label>
                        <textarea onChange={(e)=>setQuestion(e.target.value)} rows={4} maxLength="200" className="resize-none shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Description" />
                        <div className="flex flex-row-reverse">
                            <button onClick={(e)=>StoreQuestion(e)} className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ' >Post</button></div>
                    </form>
                </div>
                <div>
                    <div className='font-bold text-xl text-gray-700'>Frequently Asked Question</div>
                    <div >
                        {preQuestion?.map((ques,questionNumber) => (<>
                            <div data-aos="zoom-in" data-aos-duration="2000" data-aos-once="false" className="container">
                                <div className='font-semibold text-blue-950'>{ques.question}</div>
                                <div className='text-gray-700 pl-2 m-3'>
                                    {ques.reply?.map((r) => (<>
                                        <div className='mt-2'>{r}</div> <hr />
                                    </>))}</div>
                                
                            </div>
                            <form >
                                    <textarea onChange={(e)=>setReply(e.target.value)} rows={4} maxLength="200" className=" w-full resize-none shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Write your answer" />
                                    <div className='flex flex-row-reverse'><button onClick={(e)=>sendReply(e,questionNumber)} className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 '>Submit</button></div>

                                </form >

                        </>))}
                    </div>
                </div>
            </div>
        </ParentWrapper>
    )
}
