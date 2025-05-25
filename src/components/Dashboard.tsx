
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Copy, Share2, Users, DollarSign, TrendingUp, ExternalLink } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import EarningsChart from './EarningsChart';
import ReferralCard from './ReferralCard';
import LeaderboardCard from './LeaderboardCard';
import ShareModal from './ShareModal';

interface DashboardProps {
  onBack: () => void;
}

const Dashboard = ({ onBack }: DashboardProps) => {
  const [showShareModal, setShowShareModal] = useState(false);
  const { toast } = useToast();

  const userReferralId = "GMD-JohnDoe-4XF7";
  const referralLink = `https://getmedesign.com/signup?ref=${userReferralId}`;

  const handleCopyReferralId = () => {
    navigator.clipboard.writeText(userReferralId);
    toast({
      title: "Copied!",
      description: "Referral ID copied to clipboard",
    });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    toast({
      title: "Copied!",
      description: "Referral link copied to clipboard",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={onBack}
                className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Referral Dashboard
              </h1>
            </div>
            <Badge className="bg-green-100 text-green-800 border-green-200">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Active
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-all duration-300 border-purple-100">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Earnings</CardTitle>
              <DollarSign className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">$2,450.00</div>
              <p className="text-xs text-gray-500 mt-1">
                <span className="text-green-600">+12.5%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-purple-100">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Active Referrals</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">47</div>
              <p className="text-xs text-gray-500 mt-1">
                <span className="text-blue-600">+3</span> new this week
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-purple-100">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Conversion Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">8.3%</div>
              <p className="text-xs text-gray-500 mt-1">
                <span className="text-purple-600">+1.2%</span> improvement
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-purple-100">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Pending Payout</CardTitle>
              <DollarSign className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">$340.50</div>
              <p className="text-xs text-gray-500 mt-1">Next payout: Feb 1st</p>
            </CardContent>
          </Card>
        </div>

        {/* Referral ID Section */}
        <Card className="mb-8 border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-800 flex items-center">
              <Share2 className="h-5 w-5 mr-2 text-purple-600" />
              Your Referral Information
            </CardTitle>
            <CardDescription>Share your unique ID to start earning commissions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Referral ID</label>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 p-3 bg-white rounded-lg border border-purple-200 font-mono text-lg font-semibold text-purple-700">
                    {userReferralId}
                  </div>
                  <Button
                    onClick={handleCopyReferralId}
                    variant="outline"
                    size="sm"
                    className="border-purple-200 hover:border-purple-300 text-purple-700 hover:bg-purple-50"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Referral Link</label>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 p-3 bg-white rounded-lg border border-purple-200 text-sm text-gray-600 truncate">
                    {referralLink}
                  </div>
                  <Button
                    onClick={handleCopyLink}
                    variant="outline"
                    size="sm"
                    className="border-purple-200 hover:border-purple-300 text-purple-700 hover:bg-purple-50"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                onClick={() => setShowShareModal(true)}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share Now
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open(referralLink, '_blank')}
                className="border-purple-200 hover:border-purple-300 text-purple-700 hover:bg-purple-50"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Preview Link
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Charts and Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <EarningsChart />
          <ReferralCard />
        </div>

        {/* Leaderboard */}
        <LeaderboardCard />
      </div>

      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        referralId={userReferralId}
        referralLink={referralLink}
      />
    </div>
  );
};

export default Dashboard;
