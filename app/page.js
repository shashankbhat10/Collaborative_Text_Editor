"use client";

import Header from "@/components/Header";
import { Button, Dialog, DialogBody, DialogFooter, IconButton } from "@material-tailwind/react";
// import Head from "next/head";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Login from "@/components/Login";
import { useState } from "react";
import { firestore } from "@/firebase";
import { collection, getDocs, addDoc, serverTimestamp } from "firebase/firestore";

export default function Home() {
  const { data: session } = useSession();
  if (!session) return <Login />;

  const [showCreateModal, updateShowCreateModal] = useState(false);
  const [newDocumentName, updateNewDocumentName] = useState("");

  const createNewDocument = async () => {
    if (newDocumentName === "") return;

    const document = {
      name: newDocumentName,
      owner: session.user.email,
      allowed: [session.user.email],
      timestamp: serverTimestamp(),
    };
    await addDoc(collection(firestore, "document"), document);

    // console.log(addedDocument);
    updateNewDocumentName("");
    updateShowCreateModal(false);

    // console.log(users);
    // console.log("Create New document");
  };

  const openModal = () => {
    const el = document.getElementById("defaultModal");
    el.ariaHidden = false;
  };

  const modal = (
    <Dialog
      size='xs'
      open={showCreateModal}
      animate={{ mount: { tranision: 0 }, unmount: { tranision: 0 } }}
      handler={() => updateShowCreateModal(false)}>
      <DialogBody className='pb-0'>
        <input
          value={newDocumentName}
          onChange={(e) => updateNewDocumentName(e.target.value)}
          type='text'
          placeholder='Enter name for new document'
          className='outline-none w-full'
          onKeyDown={(e) => e.key === "Enter" && createNewDocument()}
        />
      </DialogBody>
      <DialogFooter className='pt-2'>
        <Button
          className='mr-2 p-2 border-0'
          ripple={true}
          color='blue'
          variant='outlined'
          onClick={() => updateShowCreateModal(false)}>
          Cancel
        </Button>

        <Button className='p-2' ripple={true} color='blue' onClick={() => createNewDocument()}>
          Create
        </Button>
      </DialogFooter>
    </Dialog>
  );

  return (
    <>
      <div>
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
                  // layout='fill'
                  fill={true}
                  alt='New Document'
                  onClick={() => {
                    updateShowCreateModal(true);
                  }}
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
      {modal}
    </>
  );
}
