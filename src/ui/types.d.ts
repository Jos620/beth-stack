export interface HTMXAttributes {
  // Navigation
  hxBoost?: string;

  // HTTP
  hxGet?: string;
  hxPost?: string;
  hxPatch?: string;
  hxPut?: string;
  hxDelete?: string;

  hxVals?: string;

  // Events
  hxOn?: string;
  hxTrigger?: string;

  // History
  hxPushUrl?: string;

  // Target
  hxTarget?: string;

  // Replace
  hxSwap?: string;
  hxSwapOob?: string;
  hxSelect?: string;
  hxSelectOob?: string;
}
