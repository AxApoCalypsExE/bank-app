import HeaderBox from '@/components/ui/header-box';
import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'
import BankCard from '../_components/bank-card';

const MyBanks = async () => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ 
    userId: loggedIn.$id 
  })

  return (
    <section className='flex'>
      <div className="my-banks dark:!bg-gray-800">
        <HeaderBox
          title="My Bank Accounts"
          subtext="Effortlessly manage your banking activites."
        />

        <div className="space-y-4">
          <h2 className="header-2">
            Your cards
          </h2>
          <div className="flex flex-wrap gap-6">
            {accounts && accounts.data.map((a: Account) => (
              <BankCard
                key={accounts.id}
                account={a}
                userName={`${loggedIn?.firstName} ${loggedIn?.lastName}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyBanks