import type { Route } from "./+types/home";
import Navbar from "~/Components/Navbar";
import {resumes} from "../../constants";
import ResumeCard from "~/Components/ResumeCard";
import {usePuterStore} from "~/Lib/Puter";
import {useLocation, useNavigate} from "react-router";
import {useEffect} from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CVGenius" },
    { name: "description", content: "Transform your resume with instant AI analysis. Get personalized feedback on formatting, keywords, and ATS compatibility to boost your interview chances and land your dream job faster." },
  ];
}

export default function Home() {
    const { auth } = usePuterStore();
    const navigate = useNavigate();

    useEffect(()=>{
        if (!auth.isAuthenticated) navigate('/auth?next=/');
    },[auth.isAuthenticated])

    return <main className={'bg-[url(/images/bg-main.svg)] bg-cover'}>
    <Navbar/>


      <section className={'main-section'}>
        <div className={'page-heading py-16'}>
            <h1>Your career breakthrough starts here.</h1>
            <h2>Review your CV and check with an AI powered feedbacks!</h2>
        </div>
          {resumes.length > 0 &&(
              <div className={'resumes-section'}>
                  {resumes.map((resume) =>(
                      <ResumeCard key={resume.id} resume={resume}/>
                  ))}
              </div>
          )}
    </section>


  </main>;
}
