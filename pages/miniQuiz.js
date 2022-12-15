import Head from 'next/head'
import React, { useState } from 'react'
import questions from '../resources/questions'
import { send } from 'emailjs-com';


function MiniQuiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const ans1= ["1","2","3","4","5","6","7"]
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [toSend, setToSend] = useState({
        f_name: '',
        l_name: '',
        message: '',
        reply_to: '',
        ans: []
    });
    const handleSubmitButton = () => {
        let newScore = 0;
        for (let i = 0; i < questions.length; i++) {
            questions[i].answerOptions.map(
                (answer) =>
                    answer.isCorrect &&
                    answer.answer === selectedOptions[i]?.answerByUser &&
                    (newScore += 1)
            );
        }
        setScore(newScore);
        setShowScore(true);
    };
    const handleAnswerOption = (answer) => {
        setSelectedOptions([
            (selectedOptions[currentQuestion] = { answerByUser: answer }),
        ]);
        
        setSelectedOptions([...selectedOptions]);
        ans1.push(answer)
        setToSend(state => ({
            ...state,
            ans: [(toSend.ans[currentQuestion] = answer)]
        }));
        setToSend(state => ({
            ...state,
            ans: [...toSend.ans]
        }));
        
        console.log("ans "+toSend.ans)
        console.log(selectedOptions[0].answerByUser)

        

    };
    const handlePrevious = () => {
        const prevQues = currentQuestion - 1;
        prevQues >= 0 && setCurrentQuestion(prevQues);
    };
    const handleNext = () => {
        const nextQues = currentQuestion + 1;
        nextQues < questions.length && setCurrentQuestion(nextQues);

    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
        
    };

    const onSubmit = (e) => {
       
        console.log(toSend)

        e.preventDefault();
        send(
            'service_fgqci5u',
            'template_u85efhp',
            toSend,
            'QgRkeTht_54H1nMdn'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert("Quiz sent for review!")
            })
            .catch((err) => {
                console.log('FAILED...', err);
                alert("Message not sent! please try again")
            });
    };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <Head>
        <title>Mini Quiz</title>
      </Head>
          <div className="quiz flex flex-col w-full h-screen px-5 text-[#000] pb-5  bg-[#8AFBC5] justify-center items-center">

              {showScore ? (
                  <form onSubmit={onSubmit} class="w-full max-w-lg">
                      <div class="flex flex-wrap -mx-3 mb-6">
                          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                  First Name
                              </label>
                              <input onChange={handleChange} name='f_name' class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
                                  <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                          </div>
                          <div class="w-full md:w-1/2 px-3">
                              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                  Last Name
                              </label>
                              <input onChange={handleChange} name='l_name' class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
                          </div>
                      </div>
                      <div class="flex flex-wrap -mx-3 mb-6">
                          <div class="w-full px-3">
                              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                  E-mail
                              </label>
                              <input onChange={handleChange} name='reply_to' class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email"/>
                          </div>
                      </div>
                      <div class="flex flex-wrap -mx-3 mb-6">
                          <div class="w-full px-3">
                              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                  Message
                              </label>
                              <textarea onChange={handleChange} name='message' class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                          </div>
                      </div>
                      <div class="md:flex md:items-center">
                          <div class="md:w-1/3">
                              <button class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" name="Submit">
                                  Submit
                              </button>
                          </div>
                          <div class="md:w-2/3"></div>
                      </div>
                  </form>
              ) : (
                  <>
                          <p className='container text-lg'>A large percentage of people are aware if what is and isn't required to be healthy. Most of our clients know, in theory, what they need to do to look and feel their absolute best. The first step is analyzing your overall lifestyle. This quiz will help you get a general idea using the most basic indicators and help you get to your health goals by objectively figuring out which areas might need some work. </p>

                      <div className="flex flex-col items-start w-full">
                          <h4 className="mt-2 text-xl text-white/60">
                              Question {currentQuestion + 1} of {questions.length}
                          </h4>
                          <div className="mt-4 text-2xl text-black">
                              {questions[currentQuestion].question}
                          </div>
                      </div>
                      <div className="flex flex-col w-full">
                          {questions[currentQuestion].answerOptions.map((answer, index) => (
                              <div
                                  key={index}
                                  className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer text-black border-white/10 rounded-xl bg-[#68e0a6]"
                                  onClick={(e) => handleAnswerOption(answer.answer)}
                              >
                                  <input
                                      type="radio"
                                      name={answer.answer}
                                      value={answer.answer}
                                      checked={
                                          answer.answer === selectedOptions[currentQuestion]?.answerByUser
                                      }
                                      onChange={(e) => handleAnswerOption(answer.answer)}
                                      className="w-6 h-6 bg-black"
                                  />
                                  <p className="ml-6 text-white">{answer.answer}</p>
                              </div>
                          ))}
                      </div>
                      <div className="flex justify-between w-full mt-4 text-white">
                          <button
                              onClick={handlePrevious}
                                  className="w-[49%] py-3 bg-[#23A667] rounded-lg"
                          >
                              Previous
                          </button>
                          <button
                              onClick={
                                  currentQuestion + 1 === questions.length
                                      ? handleSubmitButton
                                      : handleNext
                              }
                                  className="w-[49%] py-3 bg-[#23A667] rounded-lg"
                          >
                              {currentQuestion + 1 === questions.length ? "Submit" : "Next"}
                          </button>
                      </div>
                  </>
              )
}
      </div>
    </div>
  )
}

export default MiniQuiz