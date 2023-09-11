import { InferSelectModel } from 'drizzle-orm';

import { todos } from '@/infra/database/schema';

export type Todo = InferSelectModel<typeof todos>;
