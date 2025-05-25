
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';

const EarningsChart = () => {
  const data = [
    { month: 'Jan', earnings: 1200 },
    { month: 'Feb', earnings: 1900 },
    { month: 'Mar', earnings: 1650 },
    { month: 'Apr', earnings: 2100 },
    { month: 'May', earnings: 2450 },
    { month: 'Jun', earnings: 2800 },
  ];

  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-purple-100">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-800 flex items-center">
          <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
          Earnings Overview
        </CardTitle>
        <CardDescription>Your monthly commission earnings</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="month" 
                stroke="#6b7280"
                fontSize={12}
              />
              <YAxis 
                stroke="#6b7280"
                fontSize={12}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip
                contentStyle={{
                  background: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }}
                formatter={(value) => [`$${value}`, 'Earnings']}
              />
              <Line
                type="monotone"
                dataKey="earnings"
                stroke="url(#colorGradient)"
                strokeWidth={3}
                dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, fill: '#8b5cf6' }}
              />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Total growth: <span className="font-semibold text-green-600">+133%</span> over 6 months
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default EarningsChart;
