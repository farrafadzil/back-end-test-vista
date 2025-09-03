// controllers/company.controllers.ts
import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const router = Router();
/**
 * @openapi
 * /companies:
 *   post:
 *     summary: Create a new company
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - registrationNumber
 *             properties:
 *               name:
 *                 type: string
 *
 *               registrationNumber:
 *                 type: string
 *
 *     responses:
 *       201:
 *         description: Company created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 registrationNumber:
 *                   type: string
 */
router.post("/", async (req, res) => {
    try {
        const { name, registrationNumber } = req.body;
        if (!name || !registrationNumber) {
            return res.status(400).json({ message: "name and registrationNumber are required" });
        }
        const company = await prisma.company.create({
            data: { name, registrationNumber },
        });
        res.status(201).json(company);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.status(500).json({ error: String(err) });
        }
    }
});
/**
 * @openapi
 * /companies:
 *   get:
 *     summary: List all companies with services
 *     responses:
 *       200:
 *         description: List of companies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   registrationNumber:
 *                     type: string
 *                   services:
 *                     type: array
 *                     items:
 *                       type: object
 */
router.get("/", async (_req, res) => {
    try {
        const companies = await prisma.company.findMany({
            include: { services: true },
        });
        res.status(200).json(companies);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.status(500).json({ error: String(err) });
        }
    }
});
export default router;
//# sourceMappingURL=company.controllers.js.map