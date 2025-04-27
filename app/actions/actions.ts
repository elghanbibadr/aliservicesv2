'use server'


import { createClient } from '@/utils/supabase/client'
import { EmailType } from '../admin/emails/columns';

import { revalidatePath } from 'next/cache';
export async function GetEmails(): Promise<EmailType[]> {
  const supabase = await createClient()
  const { data, error } = await supabase.from("Emails").select("*"); // Prevents caching

  if (error) {
    console.error("Error fetching emails:", error);
    return [];
  }

  return data;
}



export async function deleteEmail(emailId:string) {
  const supabase = await createClient()

   // Attempt to delete the row
   const { data, error } = await supabase
   .from("Emails")
   .delete()
   .eq("id", emailId);  // Assuming "id" is the unique identifier for the row
 
 if (error) {
   console.error("Error deleting email:", error);
   return { success: false, message: "Failed to delete email" };
 }

 revalidatePath('/admin/emails')

 return { success: true, data };
  }
  


  
export async function addEmail(newEmailData:EmailType) {
    const supabase = await createClient()
  
     
  const { data, error } = await supabase
  .from("Emails")
  .insert([
    { email: newEmailData.email,username:newEmailData.userName,message:newEmailData.message,phone:newEmailData.phone,businessType:newEmailData.businessType  } // Adjust the keys according to your table columns
  ]);

if (error) {
  console.error("Error adding email:", error);
  return { success: false, message: "Failed to add email" };
}
revalidatePath('/admin/emails')

return { success: true, data };
    }
    
  