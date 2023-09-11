import { InferSelectModel } from 'drizzle-orm';

import { todos } from '../database/schema';

export type Todo = InferSelectModel<typeof todos>;
