
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Trophy, Medal, Award, Crown } from 'lucide-react';

const LeaderboardCard = () => {
  const leaderboardData = [
    { rank: 1, name: 'Sarah Chen', referrals: 156, earnings: 4250, badge: 'Gold', initials: 'SC' },
    { rank: 2, name: 'John Doe', referrals: 142, earnings: 3890, badge: 'Gold', initials: 'JD', isCurrentUser: true },
    { rank: 3, name: 'Mike Johnson', referrals: 138, earnings: 3720, badge: 'Silver', initials: 'MJ' },
    { rank: 4, name: 'Emma Wilson', referrals: 124, earnings: 3350, badge: 'Silver', initials: 'EW' },
    { rank: 5, name: 'Alex Rodriguez', referrals: 118, earnings: 3180, badge: 'Bronze', initials: 'AR' },
    { rank: 6, name: 'Lisa Thompson', referrals: 98, earnings: 2640, badge: 'Bronze', initials: 'LT' },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-5 w-5 text-yellow-500" />;
      case 2:
        return <Trophy className="h-5 w-5 text-gray-400" />;
      case 3:
        return <Medal className="h-5 w-5 text-amber-600" />;
      default:
        return <Award className="h-5 w-5 text-gray-400" />;
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Gold':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Silver':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'Bronze':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-purple-100">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-800 flex items-center">
          <Trophy className="h-5 w-5 mr-2 text-yellow-500" />
          Top Referrers Leaderboard
        </CardTitle>
        <CardDescription>See how you rank among other freelancers this month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {leaderboardData.map((user) => (
            <div
              key={user.rank}
              className={`flex items-center justify-between p-4 rounded-lg border transition-all duration-300 hover:shadow-md ${
                user.isCurrentUser 
                  ? 'border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50' 
                  : 'border-gray-100 hover:border-purple-100'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  {getRankIcon(user.rank)}
                  <span className="font-bold text-lg text-gray-700">#{user.rank}</span>
                </div>
                
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold">
                    {user.initials}
                  </AvatarFallback>
                </Avatar>
                
                <div>
                  <div className="flex items-center space-x-2">
                    <span className={`font-semibold ${user.isCurrentUser ? 'text-purple-700' : 'text-gray-800'}`}>
                      {user.name}
                    </span>
                    {user.isCurrentUser && (
                      <Badge className="bg-purple-100 text-purple-800 border-purple-200 text-xs">
                        You
                      </Badge>
                    )}
                  </div>
                  <div className="text-sm text-gray-600">
                    {user.referrals} referrals • ${user.earnings.toLocaleString()} earned
                  </div>
                </div>
              </div>
              
              <Badge className={getBadgeColor(user.badge)}>
                {user.badge}
              </Badge>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
          <div className="flex items-center space-x-2 mb-2">
            <Crown className="h-5 w-5 text-yellow-600" />
            <span className="font-semibold text-yellow-800">Monthly Challenge</span>
          </div>
          <p className="text-sm text-yellow-700">
            Reach 160 referrals this month to unlock the <strong>Platinum Badge</strong> and earn a 
            <strong> $500 bonus!</strong>
          </p>
          <div className="mt-2 text-xs text-yellow-600">
            You need 18 more referrals to reach the next tier.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeaderboardCard;
