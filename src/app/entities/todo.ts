import { InferSelectModel } from 'drizzle-orm';

import { todos } from '@/infra/database/drizzle/schema';

export type Todo = InferSelectModel<typeof todos>;
