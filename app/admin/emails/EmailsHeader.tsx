"use client"
import React from 'react'
import { CSVLink } from 'react-csv'
import { DownloadCloudIcon } from "lucide-react"
import { EmailType } from './columns'


const EmailsHeader = ({data}:{data:EmailType[]}) => {
  return (
    <div className="flex mb-10 justify-between items-center">
    <h3 className="text-white">Emails</h3>
    <CSVLink data={data}>
    <button  className="  text-[1.4rem] rounded-full w-fit font-semibold bg-white text-secondaryblack py-3 px-14 capitalize flex justify-between items-center gap-x-2">  <span>export</span> <DownloadCloudIcon height={18} width={18} /> </button>
    </CSVLink>
  </div>
  )
}

export default EmailsHeader