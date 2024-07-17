import HeaderBox from "@/components/ui/header-box";
import TotalBalanceBox from "./_components/total-balance-box";
import RightSidebar from "./_components/right-sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home = async () => {
    const loggedIn = await getLoggedInUser();

    

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Effortlessly monitor and control your finances and transactions anytime, anywhere"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.50 }, { currentBalance: 500 }]}
      />
    </section>
  );
};

export default Home;
