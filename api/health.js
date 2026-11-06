export function GET() {
  return Response.json({
    status: 'ok',
    teamId: 'Tech Titans',
    message: 'Backend connected successfully!'
  });
}