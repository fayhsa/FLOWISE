import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddAgentReasoningToChatMessage1708847102521 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const columnExists = await queryRunner.hasColumn('chat_message', 'agentReasoning')
        if (!columnExists) queryRunner.query(`ALTER TABLE \`chat_message\` ADD COLUMN \`agentReasoning\` TEXT;`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`chat_message\` DROP COLUMN \`agentReasoning\`;`)
    }
}
