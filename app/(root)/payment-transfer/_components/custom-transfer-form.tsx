import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import React from 'react'
import { BankDropdown } from './bank-dropdown';
import { UseFormSetValue } from 'react-hook-form';

type FormSchema = {
  email: string;
  name: string;
  amount: string;
  senderBank: string;
  sharableId: string;
};


interface CustomTransferFormProps {
  control: any;
  name: string;
  label: string;
  description: string;
  accounts: any[];
  setValue: UseFormSetValue<FormSchema>;
}

const CustomTransferForm = ({
  control,
  name,
  label,
  description,
  accounts,
  setValue,
}: CustomTransferFormProps) => {
  return (
    <FormField
          control={control}
          name={name}
          render={() => (
            <FormItem className="border-t border-gray-200">
              <div className="payment-transfer_form-item pb-6 pt-5">
                <div className="payment-transfer_form-content">
                  <FormLabel className="text-14 font-medium text-gray-700 dark:text-blue-50">
                    {label}
                  </FormLabel>
                  <FormDescription className="text-12 font-normal text-gray-600 dark:text-blue-25">
                    {description}
                  </FormDescription>
                </div>
                <div className="flex w-full flex-col">
                  <FormControl>
                    <BankDropdown
                      accounts={accounts}
                      setValue={setValue}
                      otherStyles="!w-full"
                    />
                  </FormControl>
                  <FormMessage className="text-12 text-red-500" />
                </div>
              </div>
            </FormItem>
          )}
        />
  )
}

export default CustomTransferForm