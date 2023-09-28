"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/navigation";

const GoBack = () => {
  const router = useRouter()

  return (
    <button onClick={() => router.back()}>
      <span><FontAwesomeIcon icon={faArrowLeftLong} /> go back</span>
    </button>
  )
}

export default GoBack