import Header from "@/app/ui/components/header";
import Footer from "@/app/ui/components/footer";

export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <div className="main-wrapper home-two">
                <div className="container">
                    <Header />
                </div>
                <div className="tr-margin-top">
                    <div className="container">
                        {children}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
  }