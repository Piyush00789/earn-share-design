
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, Share2, Users, DollarSign, TrendingUp } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import ShareModal from './ShareModal';

const ReferEarnTab = () => {
  const [showShareModal, setShowShareModal] = useState(false);
  const { toast } = useToast();

  // User's unique referral ID for GetMeDesign
  const userReferralId = "GMD-USER123-4XF7";
  const referralLink = `https://getmedesign.com/payment-plans?ref=${userReferralId}`;

  const copyReferralId = () => {
    navigator.clipboard.writeText(userReferralId);
    toast({
      title: "Copied!",
      description: "Referral ID copied to clipboard",
    });
  };

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    toast({
      title: "Copied!",
      description: "Referral link copied to clipboard",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card className="border-purple-200">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
            <Users className="h-6 w-6 mr-2 text-purple-600" />
            Refer & Earn
          </CardTitle>
          <CardDescription>
            Share your referral ID for GetMeDesign payment plans and earn commissions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Referral ID Section */}
          <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Share2 className="h-5 w-5 mr-2 text-purple-600" />
              Your GetMeDesign Referral Information
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Referral ID
                </label>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 p-3 bg-white rounded-lg border border-purple-200 font-mono text-lg font-semibold text-purple-700">
                    {userReferralId}
                  </div>
                  <Button
                    onClick={copyReferralId}
                    variant="outline"
                    size="sm"
                    className="border-purple-200 hover:border-purple-300 text-purple-700 hover:bg-purple-50"
                  >
                    <Copy className="h-4 w-4 mr-1" />
                    Copy
                  </Button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Referral Link for Payment Plans
                </label>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 p-3 bg-white rounded-lg border border-purple-200 text-sm text-gray-600 truncate">
                    {referralLink}
                  </div>
                  <Button
                    onClick={copyReferralLink}
                    variant="outline"
                    size="sm"
                    className="border-purple-200 hover:border-purple-300 text-purple-700 hover:bg-purple-50"
                  >
                    <Copy className="h-4 w-4 mr-1" />
                    Copy
                  </Button>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  onClick={() => setShowShareModal(true)}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white w-full sm:w-auto"
                  size="lg"
                >
                  <Share2 className="h-5 w-5 mr-2" />
                  Share Your Referral
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-blue-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Referrals</p>
                    <p className="text-2xl font-bold text-blue-600">12</p>
                  </div>
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Earnings</p>
                    <p className="text-2xl font-bold text-green-600">$450</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Conversion Rate</p>
                    <p className="text-2xl font-bold text-purple-600">8.3%</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* How it Works */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-800">
                How It Works
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Badge className="bg-purple-100 text-purple-800 font-semibold">1</Badge>
                  <p className="text-sm text-gray-600">
                    Share your referral ID or link with friends and potential customers
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge className="bg-purple-100 text-purple-800 font-semibold">2</Badge>
                  <p className="text-sm text-gray-600">
                    When they purchase a GetMeDesign payment plan using your referral
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge className="bg-purple-100 text-purple-800 font-semibold">3</Badge>
                  <p className="text-sm text-gray-600">
                    You earn commission on their purchase automatically
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        referralId={userReferralId}
        referralLink={referralLink}
      />
    </div>
  );
};

export default ReferEarnTab;
