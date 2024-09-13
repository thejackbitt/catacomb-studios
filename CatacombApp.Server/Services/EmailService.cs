using MailKit.Net.Smtp;
using MimeKit;
using System.Threading.Tasks;

public interface IEmailService
{
    Task SendEmailAsync(string recipientEmail, string subject, string body);
}

public class SmtpEmailService : IEmailService
{
    private readonly string _smtpHost;
    private readonly int _smtpPort;
    private readonly string _smtpUsername;
    private readonly string _smtpPassword;

    public SmtpEmailService(string smtpHost, int smtpPort, string smtpUsername, string smtpPassword)
    {
        _smtpHost = smtpHost;
        _smtpPort = smtpPort;
        _smtpUsername = smtpUsername;
        _smtpPassword = smtpPassword;
    }

    public async Task SendEmailAsync(string recipientEmail, string subject, string body)
    {
        var message = new MimeMessage();
        message.From.Add(new MailboxAddress("Catacomb Studios", _smtpUsername));
        message.To.Add(new MailboxAddress("", recipientEmail));
        message.Subject = subject;
        message.Body = new TextPart("html")
        {
            Text = body
        };

        using (var client = new SmtpClient())
        {
            await client.ConnectAsync(_smtpHost, _smtpPort, MailKit.Security.SecureSocketOptions.StartTls);
            await client.AuthenticateAsync(_smtpUsername, _smtpPassword);
            await client.SendAsync(message);
            await client.DisconnectAsync(true);
        }
    }
}
