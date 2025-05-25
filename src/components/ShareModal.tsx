
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Facebook, Twitter, Mail, MessageCircle, Copy, Share2, Link } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  referralId: string;
  referralLink: string;
}

const ShareModal = ({ isOpen, onClose, referralId, referralLink }: ShareModalProps) => {
  const { toast } = useToast();

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${type} copied to clipboard`,
    });
  };

  const shareTemplates = {
    social: `🎨 Join GetMeDesign and get amazing design services! Use my referral ID: ${referralId} and we both benefit! 💰 ${referralLink}`,
    email: `Hi there!\n\nI've been using GetMeDesign for my design needs and thought you might be interested. They offer excellent freelance design services.\n\nIf you sign up using my referral ID (${referralId}) or this link: ${referralLink}, we both get benefits!\n\nCheck it out and let me know what you think!\n\nBest regards`,
    professional: `I'd like to recommend GetMeDesign - a platform I've been using for quality design services. You can sign up using referral ID: ${referralId} for special benefits. Link: ${referralLink}`,
  };

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`,
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTemplates.social)}`,
      color: 'bg-sky-500 hover:bg-sky-600',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodeURIComponent(shareTemplates.social)}`,
      color: 'bg-green-600 hover:bg-green-700',
    },
    {
      name: 'Email',
      icon: Mail,
      url: `mailto:?subject=Join GetMeDesign&body=${encodeURIComponent(shareTemplates.email)}`,
      color: 'bg-gray-600 hover:bg-gray-700',
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center text-xl font-bold">
            <Share2 className="h-5 w-5 mr-2 text-purple-600" />
            Share Your Referral
          </DialogTitle>
          <DialogDescription>
            Choose how you'd like to share your referral link and start earning commissions
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="quick" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="quick">Quick Share</TabsTrigger>
            <TabsTrigger value="custom">Custom Message</TabsTrigger>
            <TabsTrigger value="direct">Direct Link</TabsTrigger>
          </TabsList>

          <TabsContent value="quick" className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((platform) => {
                const IconComponent = platform.icon;
                return (
                  <Button
                    key={platform.name}
                    onClick={() => window.open(platform.url, '_blank')}
                    className={`${platform.color} text-white transition-all duration-300 transform hover:scale-105`}
                  >
                    <IconComponent className="h-4 w-4 mr-2" />
                    {platform.name}
                  </Button>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="custom" className="space-y-4">
            <div className="space-y-3">
              <div>
                <Label htmlFor="social-message">Social Media Message</Label>
                <div className="mt-1 relative">
                  <textarea
                    id="social-message"
                    className="w-full p-3 border border-gray-300 rounded-lg resize-none"
                    rows={3}
                    defaultValue={shareTemplates.social}
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    className="absolute top-2 right-2"
                    onClick={() => handleCopy(shareTemplates.social, 'Message')}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              <div>
                <Label htmlFor="email-message">Email Template</Label>
                <div className="mt-1 relative">
                  <textarea
                    id="email-message"
                    className="w-full p-3 border border-gray-300 rounded-lg resize-none"
                    rows={4}
                    defaultValue={shareTemplates.email}
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    className="absolute top-2 right-2"
                    onClick={() => handleCopy(shareTemplates.email, 'Email template')}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="direct" className="space-y-4">
            <div className="space-y-3">
              <div>
                <Label htmlFor="referral-id">Referral ID</Label>
                <div className="flex items-center space-x-2 mt-1">
                  <Input
                    id="referral-id"
                    value={referralId}
                    readOnly
                    className="font-mono"
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleCopy(referralId, 'Referral ID')}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              <div>
                <Label htmlFor="referral-link">Referral Link</Label>
                <div className="flex items-center space-x-2 mt-1">
                  <Input
                    id="referral-link"
                    value={referralLink}
                    readOnly
                    className="text-sm"
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleCopy(referralLink, 'Referral link')}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              <Button
                onClick={() => window.open(referralLink, '_blank')}
                variant="outline"
                className="w-full border-purple-200 hover:border-purple-300 text-purple-700 hover:bg-purple-50"
              >
                <Link className="h-4 w-4 mr-2" />
                Preview Referral Link
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default ShareModal;
