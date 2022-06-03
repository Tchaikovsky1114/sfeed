import { useContext } from "react"
import { useState } from "react"
import { UtilContext } from "../store/UtilContext"
import PaginationView from "./PaginationView"
export default function Pagination({totalResults,articles,categories}) {
  const pageNumber = articles.length === 10 ? Math.ceil(totalResults / articles.length) : Math.ceil(totalResults / 10)
  const [page,setPage] = useState(1)
  const {getNewsOnPage} = useContext(UtilContext)
  
  return <PaginationView getNewsOnPage={getNewsOnPage} pageNumber={pageNumber} articles={articles} totalResults={totalResults} page={page} />
}