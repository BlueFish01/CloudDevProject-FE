'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'


function page() {

  const router = useRouter()

  const [isLogin, setIsLogin] = useState<boolean>(true)

  if(!isLogin){
    router.push('/login')
  }

  router.push('/home')
  
  return(
    <></>
  );
}

export default page