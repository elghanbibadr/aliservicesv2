import { GetEmails } from "@/app/actions/actions"
import { DataTable } from "./data-table"
import EmailsHeader from "./EmailsHeader"
import { columns } from "./columns"




export default async function EmailsPage() {
  const data =await GetEmails()




  return (
    <>
    <EmailsHeader data={data}/>
      <DataTable columns={columns} data={data} />
    </>
  )
}