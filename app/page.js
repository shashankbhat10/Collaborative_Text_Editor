"use client";

import Header from "@/components/Header";
import { Button, Dialog, DialogBody, DialogFooter, IconButton } from "@material-tailwind/react";
// import Head from "next/head";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Login from "@/components/Login";
import { useState } from "react";

export default function Home() {
  const { data: session } = useSession();
  const [showCreateModal, updateShowCreateModal] = useState(false);
  const [newDocumentName, updateNewDocumentName] = useState("");

  if (!session) return <Login />;

  const createNewDocument = () => {
    console.log("Create New document");
  };

  // const modal = (
  //   <Dialog
  //     size='sm'
  //     open={showCreateModal}
  //     animate={{ mount: false, unmount: false }}
  //     handler={() => updateShowCreateModal(false)}>
  //     <DialogBody>
  //       <input
  //         value={newDocumentName}
  //         onChange={(e) => updateNewDocumentName(e.target.value)}
  //         type='text'
  //         placeholder='Enter name for new document'
  //         className='outline-none w-full'
  //         onKeyDown={(e) => e.key === "Enter" && createNewDocument()}
  //       />
  //     </DialogBody>
  //     <DialogFooter>
  //       <Button ripple={true} color='blue' type='reset' onClick={() => updateShowCreateModal(false)}>
  //         Cancel
  //       </Button>

  //       <Button ripple={true} color='blue' onClick={() => createNewDocument()}>
  //         Create
  //       </Button>
  //     </DialogFooter>
  //   </Dialog>
  // );

  const modal = (
    <div className='fixed inset-0 backdrop-blur-sm justify-center items-center bg-black bg-opacity-25'>
      <div className='w-[300px] z-100'>
        <div className='bg-white px-3 py-2'>Modal</div>
        Hello
      </div>
    </div>
  );

  return (
    <>
      <div>
        <div className='fixed left-1/3 top-1/3 justify-center items-center z-100 bg-black w-[400px] rounded-sm backdrop-blur-sm bg-opacity-25'>
          <div className='w-[300px]'>
            <div className='bg-white px-3 py-2'>Modal</div>
          </div>
        </div>
        <Header />
        {/* {modal} */}
        <section className='bg-[#F8F9FA] pb-10 px-10'>
          <div className='max-w-3xl mx-auto'>
            <div className='flex items-center justify-between py-6'>
              <h2 className='text-gray-700 text-lg'>Start a new Document</h2>

              <IconButton color='gray' variant='outlined' ripple className='border-0 rounded-full focus:shadow-none'>
                <i className='fa-solid fa-ellipsis-vertical text-xl'></i>
              </IconButton>
            </div>
            <div>
              <div className='relative h-32 w-24 md:h-48 md:w-36 border-2 cursor-pointer hover:border-blue-700'>
                <Image
                  src='/images/docs-blank-googlecolors.png'
                  layout='fill'
                  onClick={() => updateShowCreateModal(true)}
                />
              </div>
              <p className='ml-2 mt-2 font-semibold text-sm text-gray-700'>Blank</p>
            </div>
          </div>
        </section>

        <section className='bg-white px-10 md:px-0'>
          <div className='max-w-3xl mx-auto py-8 text-sm text-gray-700'>
            <div className='flex items-center justify-between pb-5'>
              <h2 className='font-medium flex-grow'>My Documents</h2>
              <p className='mr-10'>Date Created</p>
              <i className='fa-solid fa-folder text-xl' style={{ color: "gray" }}></i>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
