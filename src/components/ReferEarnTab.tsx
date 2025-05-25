
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Copy, Plus, Trash2, Users, DollarSign } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface ReferralEntry {
  id: string;
  personName: string;
  purchaseId: string;
  dateCreated: string;
  status: 'active' | 'used';
}

const ReferEarnTab = () => {
  const [referrals, setReferrals] = useState<ReferralEntry[]>([]);
  const [newPersonName, setNewPersonName] = useState('');
  const { toast } = useToast();

  const generatePurchaseId = (name: string) => {
    const randomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    const nameCode = name.replace(/\s+/g, '').substring(0, 8);
    return `GMD-${nameCode}-${randomCode}`;
  };

  const createNewReferral = () => {
    if (!newPersonName.trim()) {
      toast({
        title: "Error",
        description: "Please enter a person's name",
        variant: "destructive",
      });
      return;
    }

    const newReferral: ReferralEntry = {
      id: Date.now().toString(),
      personName: newPersonName.trim(),
      purchaseId: generatePurchaseId(newPersonName.trim()),
      dateCreated: new Date().toLocaleDateString(),
      status: 'active',
    };

    setReferrals([newReferral, ...referrals]);
    setNewPersonName('');
    
    toast({
      title: "Success!",
      description: `Purchase ID created for ${newPersonName}`,
    });
  };

  const copyPurchaseId = (purchaseId: string) => {
    navigator.clipboard.writeText(purchaseId);
    toast({
      title: "Copied!",
      description: "Purchase ID copied to clipboard",
    });
  };

  const deleteReferral = (id: string) => {
    setReferrals(referrals.filter(ref => ref.id !== id));
    toast({
      title: "Deleted",
      description: "Referral entry removed",
    });
  };

  const toggleStatus = (id: string) => {
    setReferrals(referrals.map(ref => 
      ref.id === id 
        ? { ...ref, status: ref.status === 'active' ? 'used' : 'active' }
        : ref
    ));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card className="border-purple-200">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
            <Users className="h-6 w-6 mr-2 text-purple-600" />
            Refer & Earn - Purchase ID Generator
          </CardTitle>
          <CardDescription>
            Create unique purchase IDs for different people to track referrals and earn commissions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Create New Referral */}
          <div className="flex flex-col sm:flex-row gap-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex-1">
              <Label htmlFor="person-name" className="text-sm font-medium text-gray-700">
                Person's Name
              </Label>
              <Input
                id="person-name"
                placeholder="Enter person's name"
                value={newPersonName}
                onChange={(e) => setNewPersonName(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && createNewReferral()}
                className="mt-1"
              />
            </div>
            <div className="flex items-end">
              <Button
                onClick={createNewReferral}
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                <Plus className="h-4 w-4 mr-2" />
                Generate ID
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-blue-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total IDs</p>
                    <p className="text-2xl font-bold text-blue-600">{referrals.length}</p>
                  </div>
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Active IDs</p>
                    <p className="text-2xl font-bold text-green-600">
                      {referrals.filter(r => r.status === 'active').length}
                    </p>
                  </div>
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Used IDs</p>
                    <p className="text-2xl font-bold text-orange-600">
                      {referrals.filter(r => r.status === 'used').length}
                    </p>
                  </div>
                  <Badge className="bg-orange-100 text-orange-800">
                    {referrals.filter(r => r.status === 'used').length}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Referrals List */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">Generated Purchase IDs</h3>
            
            {referrals.length === 0 ? (
              <Card className="border-gray-200">
                <CardContent className="p-8 text-center">
                  <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No purchase IDs generated yet</p>
                  <p className="text-sm text-gray-400">Create your first one above</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-3">
                {referrals.map((referral) => (
                  <Card key={referral.id} className="border-gray-200 hover:border-purple-300 transition-colors">
                    <CardContent className="p-4">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-semibold text-gray-800">{referral.personName}</h4>
                            <Badge 
                              variant={referral.status === 'active' ? 'default' : 'secondary'}
                              className={referral.status === 'active' ? 'bg-green-100 text-green-800' : ''}
                            >
                              {referral.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm text-gray-600">Purchase ID:</span>
                            <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-purple-700">
                              {referral.purchaseId}
                            </code>
                          </div>
                          <p className="text-xs text-gray-500">Created: {referral.dateCreated}</p>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => copyPurchaseId(referral.purchaseId)}
                            className="border-purple-200 hover:border-purple-300 text-purple-700"
                          >
                            <Copy className="h-3 w-3 mr-1" />
                            Copy
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => toggleStatus(referral.id)}
                            className={referral.status === 'active' 
                              ? 'border-orange-200 hover:border-orange-300 text-orange-700'
                              : 'border-green-200 hover:border-green-300 text-green-700'
                            }
                          >
                            {referral.status === 'active' ? 'Mark Used' : 'Mark Active'}
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => deleteReferral(referral.id)}
                            className="border-red-200 hover:border-red-300 text-red-700"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReferEarnTab;
