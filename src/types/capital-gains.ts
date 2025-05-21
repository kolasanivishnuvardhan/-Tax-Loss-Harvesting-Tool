export interface CapitalGainsCategory {
  profits: number;
  losses: number;
}

export interface CapitalGains {
  stcg: CapitalGainsCategory;
  ltcg: CapitalGainsCategory;
}

export interface CapitalGainsApiResponse {
  capitalGains: CapitalGains;
} 