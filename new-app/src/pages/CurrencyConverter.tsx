import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const currencies = [
    { code: 'USD', name: 'US Dollar' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'British Pound' },
    { code: 'AUD', name: 'Australian Dollar' },
    { code: 'JPY', name: 'Japanese Yen' },
    { code: 'CNY', name: 'Chinese Yuan' },
    { code: 'INR', name: 'Indian Rupee' },
];

export default function CurrencyConverter() {
    const [amount, setAmount] = useState<string>('');
    const [currency, setCurrency] = useState<string>('');
    const [result, setResult] = useState<string>('');

    const handleConvert = () => {
        // Example conversion rates (you should use real-time rates in production)
        const rates: { [key: string]: number } = {
            USD: 325.5,
            EUR: 350.75,
            GBP: 410.25,
            AUD: 212.3,
            JPY: 2.18,
            CNY: 45.2,
            INR: 3.92,
        };

        if (amount && currency) {
            const convertedAmount = parseFloat(amount) * rates[currency];
            setResult(`${amount} ${currency} = ${convertedAmount.toFixed(2)} LKR`);
        }
    };

    return (
        <div className="container py-8 flex items-center justify-center min-h-screen">
            <div className="w-full max-w-xl">
                <h1 className="text-4xl font-bold mb-8 text-center">Currency Converter</h1>
                <Card className="p-6">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="amount">Amount</Label>
                            <Input
                                id="amount"
                                type="number"
                                placeholder="Enter amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label>Select Currency</Label>
                            <Select value={currency} onValueChange={setCurrency}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select currency" />
                                </SelectTrigger>
                                <SelectContent>
                                    {currencies.map((curr) => (
                                        <SelectItem key={curr.code} value={curr.code}>
                                            {curr.code} - {curr.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <Button className="w-full" onClick={handleConvert}>
                            Convert to LKR
                        </Button>

                        {result && <div className="mt-4 p-4 bg-secondary rounded-lg text-center text-lg">{result}</div>}
                    </div>
                </Card>
            </div>
        </div>
    );
}
