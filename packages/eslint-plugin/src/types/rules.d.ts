interface ReportDescriptorOptionsBase {
  data?: { [key: string]: string };

  fix?:
    | null
    | ((fixer: RuleFixer) => null | IterableIterator<Fix> | Fix[]);
}

type SuggestionDescriptorMessage = { desc: string } | { messageId: string };
type SuggestionReportDescriptor = SuggestionDescriptorMessage &
  ReportDescriptorOptionsBase;

interface ReportDescriptorOptions extends ReportDescriptorOptionsBase {
  suggest?: SuggestionReportDescriptor[] | null;
}

type ReportDescriptor = ReportDescriptorMessage &
  ReportDescriptorLocation &
  ReportDescriptorOptions;
type ReportDescriptorMessage = { message: string } | { messageId: string };
interface ReportDescriptorLocation {
  node?: BaseNode;
  loc?: ESLint.AST.SourceLocation;
  line?: number;
  column?: number;
}

export interface Context extends Omit<ESLint.Rule.RuleContext, "report"> {
  report: (descriptor: ReportDescriptor) => void;
}

export interface RuleModule extends eslint.Rule.RuleModule {
  create: (context: Context) => RuleListener;
}