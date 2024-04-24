import React from "react";
import { UilEdit,UilSearch,UilCheckSquare,UilUsersAlt,UilMoneyBillStack,UilMoneyBill,UilBook,UilVectorSquareAlt,UilProcess} from '@iconscout/react-unicons'
export default function Component1() {
  const [showModal, setShowModal] = React.useState(false);
  const [showModals, setShowModals] = React.useState(false);
  const [showModales, setShowModales] = React.useState(false);
  const [showboxModal, setShowboxModal] = React.useState(false);
  const [showModal5, setShowbox1Modal] = React.useState(false);
  const [showModal3, setShowbox3Modal] = React.useState(false);
  const [showModal4, setShowbox4Modal] = React.useState(false);
  const [showModal6, setShowbox6Modal] = React.useState(false);





  
  return (
    <div className="mt-4 py-8 bg-white">
      <h1 className=" justify-center text-center text-4xl font-serif  font-bold text-gray-600">
        OUR SERVICE
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:ml-20 mx-auto justify-center py-12 ">
           {/* <!---2Box card secssion---> */}
          <div className="  group ">
      <div class="  brightness-105/dark  bg-cover shadow-2xl rounded-2xl  hover:rounded-none duration-200  shadow-black h-52 p-6 lg:w-72  md:w-52  w-full mt-16" style={{"background-image": "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZryFziDhEMKCLuBfwiSiFIiVyI46yuoRPmA&usqp=CAU"}} type="button" onClick={() => setShowModals(true)}>
          <div className="py-4">
            <div className="w-16 h-16  relative rounded-full border-2 bg-gray-200 "><UilEdit className='ml-2 absolute mt-2 w-12 h-12 bg-gray-200 text-gray-900'/></div>
            <div className="mt-10 font-bold text-gray-700 text-3xl font-serif "> <h1>Attestation</h1></div>
          </div>
          </div>
</div>
      {showModals ? (
        <>
          <div
            className="justify-center items-center flex px-5 overflow-x-hidden overflow-y-auto fixed inset-1 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-100 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between  border-b border-solid bg-blue-900 border-slate-200 rounded-t">
                  <h3 className="text-2xl font-serif text-white py-4 lg:ml-6">
                  Attestation
                  </h3>
                  <button
                    className="text-red-500 text-3xl background-transparent  lg:ml-[500px] font-bold uppercase px-6 py-2  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModals(false)}
                  >
                    X
                  </button>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModals(false)}
                  >
                   
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 grid grid-cols-3 lg:w-[800px] lg:h-[150px]">
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">Statutory Audit</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">Compliance Audit</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">Certification</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">Tax Audit</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">Accounting</h1></div>


                </div>
                {/*footer*/}
              
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
          {/* <!---2End Box card secssion---> */}
        
        




          {/* <!---1Box card secssion---> */}
          <div className="  group">
      <div class="  drounded-lg brightness-105/dark  bg-cover shadow-2xl rounded-2xl  hover:rounded-none duration-200  shadow-black h-52 p-6 lg:w-72  md:w-52  w-full mt-16" style={{"background-image": "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbSvuyQUJK5ZAeO8GRT94f9uMatfkRT-BVVg&usqp=CAU"}} type="button" onClick={() => setShowModal(true)}>
          <div className="py-4">
            <div className="w-16 h-16  relative rounded-full  border-2 bg-gray-200"><UilSearch className='ml-2 absolute mt-2 w-12 h-12 bg-gray-200 text-gray-900'/></div>
            <div className="mt-10 font-serif font-bold text-2xl text-gray-900 "> <h1>Risk Assessment</h1></div>
          </div>
          </div>
</div>
      {showModal ? (
        <>
         <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-1 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-100 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid bg-blue-900 border-slate-200 rounded-t">
                  <h3 className="text-3xl font-serif text-white">
                  Risk&nbsp;Assessment
                  </h3>
                 
                  <button
                    className="text-red-500 background-transparent  font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    onClick={() => setShowModal(false)}
                  >
                   X
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 grid grid-cols-2 w-full ">
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">Internal Audit</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">Revenue / Stock Audit</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">Pre-audit</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">Fraud / Special Investigation Audit</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">Concurrent Audit</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">Information Systems Audit and Risk Management</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">Forensic Audit</h1></div>



                </div>
                {/*footer*/}
              
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
          {/* <!---1End Box card secssion---> */}





        
       
      
       
       {/* <!---3Box card secssion---> */}
       <div className="  group">
      <div class="  rounded-2xl  hover:rounded-none duration-200  brightness-105/dark  bg-cover shadow-2xl  shadow-black h-52 p-6 lg:w-72  md:w-52  w-full mt-16" style={{"background-image": "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk_npSC-1VOau8jo8uXbCKI5p0EZQ3FJecMbNCHaJGO5NMEuCl4RTPGfP9qndS46rXdiE&usqp=CAU"}} type="button" onClick={() => setShowModales(true)}>
          <div className="py-4">
            <div className="w-16 h-16  relative rounded-full border-2 bg-gray-200 "><UilUsersAlt className='ml-2 absolute mt-2 w-12 h-12'/></div>
            <div className="mt-6 font-bold text-gray-200 text-xl font-serif"> <h1 className="text-gray-700">Business Support Services</h1></div>
          </div>
          </div>
</div>
      {showModales ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-1 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-100 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid bg-blue-900 border-slate-200 rounded-t">
                  <h3 className="text-3xl font-serif text-white">
                  Busines&nbsp;Support&nbsp;Services
                  </h3>
                 
                  <button
                    className="text-red-500 background-transparent  font-bold uppercase px-6 py-2 text-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    onClick={() => setShowModales(false)}
                  >
                   X
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 grid grid-cols-1 w-full ">
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">Incorporation of a Company</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">Formation and Registration of Partnership Firms</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">Decision Support Services</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">Inventory Planning and Control</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">Cash Management</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">Projections, cash flow analysis and budgeting</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">Profitability analysis -existing and new lines</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">
Recruitment, Evaluation, Training of Accounting and financial department personnel</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">Contract negotiation</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">Advising on matters relating to Special Economic Zones / Software Technology Park of India / Electronic Hardware Technology Park</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">Payroll Processing for Clients in India and Abroad</h1></div>




                </div>
                {/*footer*/}
              
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
          {/* <!---3End Box card secssion---> */}
         {/* <!---4Box card secssion---> */}
         <div className="  group">
      <div class=" rounded-2xl  hover:rounded-none duration-200  brightness-105/dark  bg-cover shadow-2xl  shadow-black h-52 p-6 lg:w-72  md:w-52  w-full mt-16" style={{"background-image": "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTqC2yD56AY4S-Af2lzXN81CgRbsq0BeSJOg&usqp=CAU"}} type="button" onClick={() => setShowboxModal(true)}>
          <div className="py-4">
            <div className="w-16 h-16 group relative rounded-full border-2 bg-gray-200"><UilMoneyBillStack className='ml-2  duration-500 absolute mt-2 w-12 h-12'/></div>
            <div className="mt-6 font-serif font-bold"> <h1 className="text-2xl font-serif text-gray-700">Management Consultancy</h1></div>
          </div>
          </div>
</div>
{showboxModal ? (
        <>
          <div
            className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-1 z-50 outline-none"
          >
            <div className="relative  my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative w-full md:w-full  grid grid-cols-1  bg-gray-100 items-center ">
                {/*header*/}
                <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 items-start justify-between p-5 border-b border-solid bg-blue-900 border-slate-200 rounded-t">
                  <h3 className="text-3xl font-serif text-white">
                  Management Consultancy
                  </h3>
                 
                  <button
                    className="text-red-500 background-transparent text-right  font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    onClick={() => setShowboxModal(false)}
                  >
                   X
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-4 grid md:grid-cols-2 lg:grid-cols-2  w-full">
                 <div className="flex p-1 h-8 w-auto"><UilCheckSquare/><h1 className="text-blue-900 font-bold ">
Management Audit</h1></div>
                 <div className="flex"><UilCheckSquare className=''/><h1 className="text-blue-900 text-sm font-bold">Designing of Internal Controls, Systems and Processes</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold text-sm">Preparation of Standard Operating Procedures</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold text-sm">Claims Verification</h1></div>
                



                </div>
                {/*footer*/}
              
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
          {/* <!---4End Box card secssion---> */}


             {/* <!---5Box card secssion---> */}
             <div className=" ">
      <div class="  rounded-2xl  hover:rounded-none duration-200  brightness-105/dark  bg-cover shadow-2xl  shadow-black h-52 p-6 lg:w-72  md:w-52  w-full mt-16" style={{"background-image": "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2LSaXdEdCiTO-2XQejbSV3DP5DVk25v3Qkg&usqp=CAU"}} type="button" onClick={() => setShowbox1Modal(true)}>
          <div className="py-4">
            <div className="w-16 h-16 group relative rounded-full border-2 bg-gray-200"><UilMoneyBill className='ml-2 absolute mt-2 w-12 h-12'/></div>
            <div className="mt-6 font-bold text-3xl text-gray-700 font-serif"> <h1>Tax</h1></div>
          </div>
          </div> 
</div>
{showModal5 ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-1 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-100 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid bg-blue-900 border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-white font-serif">
                  TAX
                  </h3>
                 
                  <button
                    className="text-red-500 background-transparent  font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    onClick={() => setShowbox1Modal(false)}
                  >
                   X
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-10 grid grid-cols-2 w-full  h-full">
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">
                 Advising on Cross Border Transactions, Transfer Pricing</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">Registration under various laws</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">Tax return preparation</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">Advising on Tax Planning</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">
Assisting in compliance to various laws</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">Appearing Before All Tax Authorities</h1></div>

                



                </div>
                {/*footer*/}
              
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
          {/* <!---5End Box card secssion---> */}
             {/* <!---6Box card secssion---> */}
             <div className="  group">
      <div class="rounded-2xl  hover:rounded-none duration-200  brightness-105/dark  bg-cover shadow-2xl  shadow-black h-52 p-6 lg:w-72  md:w-52  w-full mt-16" style={{"background-image": "url(https://www.forbes.com/advisor/wp-content/uploads/2023/01/Image-2-1.jpg"}} type="button" onClick={() => setShowbox3Modal(true)}>
          <div className="py-4">
            <div className="w-16 h-16 group relative rounded-full border-2 bg-gray-200"><UilBook className='ml-2 absolute mt-2 w-12 h-12'/></div>
            <div className="mt-6 font-bold text-3xl text-gray-700 font-serif"> <h1>Accounting</h1></div>
          </div>
          </div>
</div>
{showModal3 ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-1 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-100 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid bg-blue-900 border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-white font-serif">
                  Accounting
                  </h3>
                 
                  <button
                    className="text-red-500 background-transparent  font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    onClick={() => setShowbox3Modal(false)}
                  >
                   X
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-10 grid grid-cols-2 w-full ">
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">
                 Accounting</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">Compilation of Annual </h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">Management Information Reports</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">System planning and design</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">
                 Software selection, Installation, conversion and support</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold"> Interim Financial Statements</h1></div>

                



                </div>
                {/*footer*/}
              
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
          {/* <!---6End Box card secssion---> */}
             {/* <!---7Box card secssion---> */}
             <div className="  group">
      <div class=" rounded-2xl  hover:rounded-none duration-200  brightness-105/dark  bg-cover shadow-2xl  shadow-black h-52 p-6 lg:w-72  md:w-52  w-full mt-16" style={{"background-image": "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcLp3OKiL5qmnooaFNoSJku7iSWvypfq5iRg&usqp=CAU"}} type="button" onClick={() => setShowbox4Modal(true)}>
          <div className="py-4">
            <div className="w-16 h-16  relative rounded-full bg-gray-200"><UilVectorSquareAlt className='ml-2 absolute mt-2 w-12 h-12'/></div>
            <div className="mt-6 font-bold text-2xl font-serif text-gray-700"> <h1>Business Advisory</h1></div>
          </div>
          </div>
</div>
{showModal4 ? (
        <> 
          <div
            className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-1 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-100 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid bg-blue-900 border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-white">
                  Business Advisory
                  </h3>
                 
                  <button
                    className="text-red-500 background-transparent  font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    onClick={() => setShowbox4Modal(false)}
                  >
                   X
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-8 grid grid-cols-2 w-full ">
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">
                 Accounting</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">Accounting, Financial and Tax Due Diligence </h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">
Business Valuations</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">Corporate Finance</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">
                 Business plan development -start up and expansion</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">Business continuity and succession</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">Acquisition and merger</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">Private Equity and IPO Support</h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">
Advising and complying to various provisions of FEMA / RBI</h1></div>


                



                </div>
                {/*footer*/}
              
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
          {/* <!---7End Box card secssion---> */}
             {/* <!---8Box card secssion---> */}
             <div className="  group">
      <div class=" rounded-2xl  hover:rounded-none duration-200  brightness-105/dark  bg-cover shadow-2xl  shadow-black h-52 p-6 lg:w-72  md:w-52  w-full mt-16" style={{"background-image": "url(https://media.istockphoto.com/id/1322139094/photo/multiethnic-colleagues-sitting-at-desk-looking-at-laptop-computer-in-office.jpg?s=612x612&w=0&k=20&c=xrGP_nwtcdaZF8heKJ_FiEqnuqWxv1A7i71YZLXxSaE="}} type="button" onClick={() => setShowbox6Modal(true)}>
          <div className="py-4">
            <div className="w-16 h-16  relative rounded-full bg-gray-200"><UilProcess className='ml-2 absolute mt-2 w-12 h-12'/></div>
            <div className="mt-6 font-bold text-gray-700  font-serif"> <h1>Knowledge Process Outsourcing</h1></div>
          </div>
          </div>
</div>
{showModal6 ? (
        <>
          <div
            className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-1 z-50 outline-none "
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-100 outline-none ">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid bg-blue-900 border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-white font-serif">
                  Business Advisory
                  </h3>
                 
                  <button 
                    className="text-red-500 background-transparent  font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    onClick={() => setShowbox6Modal(false)}
                  >
                   X
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-10 grid grid-cols-1 w-full">
                 
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">Accounting and Taxation for clients in USA, UK, Australia, New Zealand, Singapore, Hongkong and UAE. </h1></div>
                 <div className="flex"><UilCheckSquare/><h1 className="text-blue-900 font-bold">
                 Back office support in the field of financial services</h1></div>
                

                



                </div>
                {/*footer*/}
              
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
          {/* <!---1End Box card secssion---> */}
        
        <div></div>
      </div>
    </div>
  );
}
