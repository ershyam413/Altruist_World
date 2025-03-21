import { SHEET_FETCH_URL,CACHE_TIME, DOC_FETCH_URL } from "@/config/constant";

export async function getData(sheetId:string) {
  try {
    const response = await fetch(`${SHEET_FETCH_URL}?id=${sheetId}`,{next:{revalidate:CACHE_TIME}});
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error:-", error);
    return null;
  }
}
export async function getDocData(docId:string) {
  try {
    const response = await fetch(`${DOC_FETCH_URL}?id=${docId}`,{next:{revalidate:CACHE_TIME}});
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error:-", error);
    return null;
  }
}
