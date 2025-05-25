
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Eye, MousePointer, CheckCircle } from 'lucide-react';

const ReferralCard = () => {
  const referralStats = [
    { label: 'Total Clicks', value: 2847, icon: MousePointer, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { label: 'Profile Views', value: 1234, icon: Eye, color: 'text-purple-600', bgColor: 'bg-purple-100' },
    { label: 'Sign-ups', value: 236, icon: Users, color: 'text-green-600', bgColor: 'bg-green-100' },
    { label: 'Conversions', value: 47, icon: CheckCircle, color: 'text-orange-600', bgColor: 'bg-orange-100' },
  ];

  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-purple-100">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-800 flex items-center">
          <Users className="h-5 w-5 mr-2 text-blue-600" />
          Referral Analytics
        </CardTitle>
        <CardDescription>Detailed breakdown of your referral performance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {referralStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="p-4 rounded-lg border border-gray-100 hover:border-purple-200 transition-colors group">
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-lg ${stat.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-4 w-4 ${stat.color}`} />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {index === 0 && '+12%'}
                    {index === 1 && '+8%'}
                    {index === 2 && '+15%'}
                    {index === 3 && '+20%'}
                  </Badge>
                </div>
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                  {stat.value.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-100">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-800">Conversion Rate</h4>
              <p className="text-sm text-gray-600">From clicks to purchases</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">8.3%</div>
              <div className="text-sm text-green-600">↑ 1.2% vs last month</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReferralCard;
