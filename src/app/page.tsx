import { CompanyLogos } from "./components/CompanyLogos";
import { ExploreCategories } from "./components/ExploreCategories";
import { FeaturedJobs } from "./components/FeaturedJobs";
import { Footer } from "./components/footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { JobSearch } from "./components/JobSearch";
import { JobsSection } from "./components/JobSection";
import { Pattern } from "./components/Pattern";

const Index = () => {
  return (
    <div className="w-full min-h-[screen] bg-[#F8F8FD] relative overflow-hidden">
      <div className="w-full h-[794px] relative">
        <Pattern />
        <Header />
        <main className="flex justify-around">
          <div className="w-[90%] flex">
          <div className="flex flex-col gap-[23px] mt-[82px] max-md:px-10 max-sm:px-5">
            <Hero />
            <JobSearch />
          </div>
          <div className="lg:bg-[url('https://s3-alpha-sig.figma.com/img/849d/9766/51c585cf41e864d6b53eba0a93aec63f?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pSEIAIbkJrUcAdNgzwz024DJ9~CAkmgPvM08IqxJ~VHzJas9853EjKTZJ1VgRmLWrNyRNcqyxRBH5zYJzJz1LN9cs1yjW9km6Vomsr774~pIFwuBhFCB8b9jd8G-ugF4dcFJ9dNP37M6heJgl8ZQueToMNRKpP4NiW-PQV0BawfpZQ-mJszcEbF8b5IKTWadgHmIjAkIIpcyGAsnrh77g6Iv200HFXmJgl6xOjv6AKxtM~s-3rqV5qoNb2fRSdMxoL~QhzH0uliTR813m-9yy8X-kjkbRfkbFY4StCx~da4Rp1KgeK0qbFebMNiP306MyGTayP~7htnVY0GHtYzwQw__')] bg-cover bg-center h-[700px] w-[600px] z-10">
        </div>
          </div>
        </main>
      </div>
      <div>
        <CompanyLogos />
      </div>
      <div>
        <ExploreCategories />
      </div>
      <div>
        <img src="https://media-hosting.imagekit.io/a0694d5de7a64f5b/Screenshot 2025-04-02 at 11.16.02 AM.png?Expires=1838181125&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=NFTZ6DU5Z5jdljjk1FYLvwO0vynuh4-NXlsHjFkd4cxKxDFP-exT6mw-qp0YCMq5fKy45bg6vNyn0GZL4NfF30uP0MVrBvlCj3Vm20R3kqUGrVELj8mDUClRq5yPVXZwjpJH06Ao2rXM5nRUQSAb4GBLM9LeRdFfDwwqCPUUPtdmroJS1MWbtoTnT9rWZmZgz0juCD0oVxvqS8OpQhpW5SNTfGtT~hNwTzHJRfEv8VuN99EfNRGyawV046jxZQ1S6IEor6OOWwwSUOG92AlWfXjeLuqjwPyQBBFjoYKd0X2-tDBxUtQIgNpJDPLRZtevhQzfo~9tpKKxANEeihFcKQ__" alt="" />
      </div>
      <div>
        <FeaturedJobs />
      </div>
      <div>
        <JobsSection />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;