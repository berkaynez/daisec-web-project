import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Calculator, DollarSign } from 'lucide-react';

interface CalculatorProps {
  className?: string;
}

export const Calculator: React.FC<CalculatorProps> = ({ className = "" }) => {
  const [cameras, setCameras] = useState(2);
  const [recordingMode, setRecordingMode] = useState('event');
  const [needsGateway, setNeedsGateway] = useState(false);
  const [billingCycle, setBillingCycle] = useState('monthly');

  // Pricing constants
  const STANDARD_PRICE = 9.99;
  const GATEWAY_PRICE = 140;
  const GATEWAY_MONTHLY = 5;
  const YEARLY_DISCOUNT = 0.15;

  // Storage estimates (GB per month)
  const STORAGE_ESTIMATES = {
    event: 100, // Event-based: ~100 GB/month per camera
    full: 900   // Full recording: ~30 GB/day = 900 GB/month per camera
  };

  const calculateCost = () => {
    let monthlyCost = cameras * STANDARD_PRICE;
    
    if (needsGateway) {
      monthlyCost += GATEWAY_MONTHLY;
    }

    // Apply yearly discount
    if (billingCycle === 'yearly') {
      monthlyCost *= (1 - YEARLY_DISCOUNT);
    }

    return {
      monthly: monthlyCost,
      yearly: monthlyCost * 12,
      gateway: needsGateway ? GATEWAY_PRICE : 0,
      storage: cameras * STORAGE_ESTIMATES[recordingMode as keyof typeof STORAGE_ESTIMATES]
    };
  };

  const costs = calculateCost();

  return (
    <Card className={`p-6 ${className}`}>
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="w-6 h-6 text-primary" />
        <h3 className="text-xl font-bold">Cost Calculator</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="cameras">Number of Cameras</Label>
            <Input
              id="cameras"
              type="number"
              min="1"
              max="50"
              value={cameras}
              onChange={(e) => setCameras(parseInt(e.target.value) || 1)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="recording">Recording Mode</Label>
            <Select value={recordingMode} onValueChange={setRecordingMode}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="event">Event-based (~100 GB/month per camera)</SelectItem>
                <SelectItem value="full">Full recording (~900 GB/month per camera)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="billing">Billing Cycle</Label>
            <Select value={billingCycle} onValueChange={setBillingCycle}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="yearly">Yearly (15% discount)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="gateway"
              checked={needsGateway}
              onCheckedChange={setNeedsGateway}
            />
            <Label htmlFor="gateway">Need Gateway Device?</Label>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-muted/50 rounded-lg p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Estimated Costs
            </h4>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Monthly Service:</span>
                <span className="font-medium">${costs.monthly.toFixed(2)}</span>
              </div>
              
              {needsGateway && (
                <div className="flex justify-between">
                  <span>Gateway (one-time):</span>
                  <span className="font-medium">${costs.gateway}</span>
                </div>
              )}
              
              <div className="flex justify-between">
                <span>Yearly Total:</span>
                <span className="font-medium">${costs.yearly.toFixed(2)}</span>
              </div>
              
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between">
                  <span>Storage (monthly):</span>
                  <span className="font-medium">{costs.storage} GB</span>
                </div>
              </div>
            </div>
          </div>

          <Button 
            className="w-full" 
            onClick={() => document.querySelector('#checkout')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Choose This Plan
          </Button>
        </div>
      </div>

      <div className="text-xs text-muted-foreground">
        * Storage estimates are approximate. Actual usage may vary based on camera resolution, 
        frame rate, and activity levels. Gateway required for offline operation and advanced features.
      </div>
    </Card>
  );
};

export default Calculator;
