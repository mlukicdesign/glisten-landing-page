import Navbar from "./Navbar";
import { createClient } from "@/prismicio";



export default async function header() {

const client = createClient();
const settings = await client.getSingle("settings");

  return (
    <div>
        <Navbar settings={settings}/>
    </div>
  )
}
